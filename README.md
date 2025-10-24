# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# Portfolio Pessoal

Este é meu portfolio pessoal desenvolvido com React, TypeScript e Vite. Uma landing page moderna e responsiva que apresenta minhas habilidades, projetos e experiência profissional.

## 🎨 Características

- **Design Moderno**: Interface limpa e profissional com animações suaves
- **Tema Escuro/Claro**: Sistema de alternância entre temas com persistência local (padrão: escuro)
- **Cor Principal**: Laranja (#ff8c00) como cor de destaque
- **Totalmente Responsivo**: Otimizado para todos os dispositivos
- **Performance**: Construído com Vite para carregamento rápido

## 📋 Seções

- **Sobre**: Introdução e links para redes sociais
- **Conhecimentos**: Skills técnicas organizadas por categoria
- **Projetos**: Showcase de projetos desenvolvidos
- **Carreira**: Linha do tempo da experiência profissional
- **Contato**: Informações de contato

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- Lucide React (ícones)
- CSS Modules

## 💻 Como usar

```bash
# Instalar dependências
yarn

# Rodar em desenvolvimento
yarn dev

# Build para produção
yarn build

# Preview do build
yarn preview
```

## 📝 Personalização

Edite os componentes em `src/components/` para adicionar suas próprias informações:
- Dados pessoais no `Hero.tsx`
- Skills no `Skills.tsx`
- Projetos no `Projects.tsx`
- Experiências no `Career.tsx`
- Informações de contato no `Contact.tsx`

---

_Este projeto foi gerado com auxílio de IA_

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
