import { useEffect, type CSSProperties, type MouseEvent } from 'react';

/**
 * Observa todos os elementos com a classe `.reveal` e adiciona `.is-visible`
 * quando entram na tela. `deps` permite reobservar quando novos elementos surgem
 * (ex.: projetos carregados da API).
 */
export const useReveal = (deps: unknown[] = []) => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');

    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

/** Atualiza as variáveis CSS --mx/--my usadas pelo efeito `.card-glow`. */
export const handleGlowMove = (e: MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

/** Atraso escalonado para a animação `.reveal`. */
export const revealDelay = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties;
