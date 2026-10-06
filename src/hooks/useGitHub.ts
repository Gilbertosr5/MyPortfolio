import { useEffect, useState } from 'react';
import { GITHUB_USERNAME, githubConfig } from '../config';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  created_at: string;
}

interface GitHubData {
  user: GitHubUser | null;
  repos: GitHubRepo[];
}

type Status = 'loading' | 'success' | 'error';

const CACHE_KEY = `github-cache:${GITHUB_USERNAME}`;
const API = 'https://api.github.com';

const readCache = (): GitHubData | null => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { timestamp, data } = JSON.parse(raw) as { timestamp: number; data: GitHubData };
    return Date.now() - timestamp < githubConfig.cacheTtlMs ? data : null;
  } catch {
    return null;
  }
};

const writeCache = (data: GitHubData) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data }));
  } catch {
    // armazenamento indisponível
  }
};

const fetchJson = async <T,>(url: string, signal: AbortSignal): Promise<T> => {
  const res = await fetch(url, {
    signal,
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  return res.json() as Promise<T>;
};

const isFeatured = (repo: GitHubRepo) =>
  githubConfig.featuredRepos.includes(repo.name) || (repo.topics ?? []).includes('portfolio');

const sortRepos = (repos: GitHubRepo[]) => {
  const order = githubConfig.featuredRepos;
  return [...repos].sort((a, b) => {
    const ia = order.indexOf(a.name);
    const ib = order.indexOf(b.name);
    if (ia !== -1 || ib !== -1) {
      return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
    }
    if (isFeatured(a) !== isFeatured(b)) return isFeatured(a) ? -1 : 1;
    return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
  });
};

const filterRepos = (repos: GitHubRepo[]) =>
  repos.filter(repo =>
    repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase() &&
    !githubConfig.hiddenRepos.includes(repo.name) &&
    (githubConfig.showForks || !repo.fork),
  );

export const useGitHub = () => {
  const [data, setData] = useState<GitHubData>(() => readCache() ?? { user: null, repos: [] });
  const [status, setStatus] = useState<Status>(() => (readCache() ? 'success' : 'loading'));

  useEffect(() => {
    if (readCache()) return;

    const controller = new AbortController();

    Promise.all([
      fetchJson<GitHubUser>(`${API}/users/${GITHUB_USERNAME}`, controller.signal).catch(() => null),
      fetchJson<GitHubRepo[]>(
        `${API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`,
        controller.signal,
      ),
    ])
      .then(([user, repos]) => {
        const next = { user, repos };
        writeCache(next);
        setData(next);
        setStatus('success');
      })
      .catch(err => {
        if (controller.signal.aborted) return;
        console.error('Falha ao carregar dados do GitHub:', err);
        setStatus('error');
      });

    return () => controller.abort();
  }, []);

  return {
    user: data.user,
    repos: sortRepos(filterRepos(data.repos)),
    status,
    isFeatured,
  };
};
