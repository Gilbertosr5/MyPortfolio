# MyPortfolio

Portfólio pessoal desenvolvido com React + TypeScript + Vite, com foco em apresentar minha identidade profissional, habilidades técnicas, projetos e trajetória.

A aplicação foi criada como uma landing page moderna, responsiva e visualmente clean, com destaque para um layout profissional e fácil de navegar em desktop e mobile.

## Sobre o projeto

Este projeto funciona como uma vitrine online para compartilhar:

- apresentação pessoal e profissional
- área de destaque para habilidades e stack
- projetos desenvolvidos com links para repositórios
- experiência profissional em linha do tempo
- seção de contato para networking e oportunidades

A interface inclui também uma experiência dinâmica com animações leves, tema claro/escuro e visual otimizado para diferentes tamanhos de tela.

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- CSS customizado
- Lucide React
- GitHub Pages para deploy

## Funcionalidades

- Layout responsivo
- Tema claro e escuro
- Efeito de typing em introdução
- Seções: Home, Skills, Projects, Career e Contact
- Links para GitHub, LinkedIn e email
- Estrutura pronta para personalização de conteúdo

## Estrutura do projeto

```bash
src/
├── App.tsx
├── main.tsx
├── index.css
├── App.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Career.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── contexts/
│   └── ThemeContext.tsx
├── styles/
│   ├── Header.css
│   ├── Hero.css
│   ├── Skills.css
│   ├── Projects.css
│   ├── Career.css
│   ├── Contact.css
│   └── Footer.css
└── assets/
```

## Como executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/Gilbertosr5/MyPortfolio.git
```

2. Acesse a pasta do projeto:

```bash
cd MyPortfolio
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

5. Acesse no navegador:

```bash
http://localhost:5173
```

## Build para produção

```bash
npm run build
```

Para visualizar o build gerado:

```bash
npm run preview
```

## Deploy

O projeto está preparado para deploy em GitHub Pages com os scripts configurados em package.json.

```bash
npm run deploy
```

## Personalização

Para adaptar o portfólio ao seu perfil, edite os componentes dentro da pasta src/components:

- Hero.tsx — apresentação inicial e redes sociais
- Skills.tsx — tecnologias e competências
- Projects.tsx — projetos exibidos no portfólio
- Career.tsx — experiência profissional
- Contact.tsx — informações de contato

## Autor

Gilberto Silva Rodrigues

## Licença

Este projeto é de uso pessoal e pode ser adaptado para outros perfis e portfólios.
