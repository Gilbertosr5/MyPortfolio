// Configurações centrais do portfólio

export const GITHUB_USERNAME = 'Gilbertosr5';

export const githubConfig = {
  // Repositórios que nunca devem aparecer na seção de projetos
  // (o repositório de README do perfil já é ocultado automaticamente)
  hiddenRepos: [] as string[],

  // Repositórios que aparecem primeiro, nesta ordem.
  // Também é possível destacar um repo adicionando o tópico "portfolio" a ele no GitHub.
  featuredRepos: ['MyPortfolio', 'biometry-camera', 'ChatApp-frontend'],

  // Exibir forks?
  showForks: false,

  // Quantos projetos aparecem antes do botão "Ver todos"
  initialVisible: 6,

  // Tempo de cache da resposta da API (a API pública permite 60 requisições/hora por IP)
  cacheTtlMs: 1000 * 60 * 60,
};

export const socialLinks = {
  github: `https://github.com/${GITHUB_USERNAME}`,
  linkedin: 'https://www.linkedin.com/in/gilbertosr5/',
  email: 'gillbertosr5@gmail.com',
};
