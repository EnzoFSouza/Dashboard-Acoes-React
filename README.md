# Dashboard de Investimentos

Dashboard interativo para acompanhamento de carteira de investimentos, desenvolvido em React com Tailwind CSS. Permite visualizar Ações e Fundos Imobiliários (FIIs), filtrar por tipo de ativo e acompanhar métricas consolidadas da carteira.

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-6-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)

## Funcionalidades

- **Resumo da carteira** — patrimônio total, valorização média, dividend yield médio e quantidade de ativos, calculados dinamicamente a partir dos dados
- **Filtro por tipo de ativo** — alternância entre Todos, Ações e FIIs
- **Cards individuais** — exibição de preço atual, dividend yield e valorização de cada ativo, com indicação visual (verde/vermelho) de performance

## Tecnologias

- **React** — biblioteca para construção da interface
- **Vite** — build tool e servidor de desenvolvimento
- **Tailwind CSS** — estilização utility-first

## Conceitos de React aplicados

- Componentização (`Header`, `ResumoCarteira`, `ListaAtivos`, `CardAtivo`)
- Props para comunicação entre componentes
- `useState` para gerenciamento de estado do filtro
- Manipulação de arrays: `.filter()` para filtragem, `.map()` para renderização de listas, `.reduce()` para cálculos agregados (patrimônio total, médias)

## Como executar

```bash
npm install
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

## Estrutura do projeto

```
src/
├── components/
│   ├── Header.jsx
│   ├── ResumoCarteira.jsx
│   ├── ListaAtivos.jsx
│   └── CardAtivo.jsx
├── data/
│   └── ativos.js
└── App.jsx
```

## Próximos passos

- Integração com API real de dados financeiros (substituindo dados estáticos)
- Persistência de dados (backend próprio ou localStorage)
- Gráficos de evolução histórica da carteira

## Contexto

Este projeto foi desenvolvido como prática de consolidação de conhecimentos em React, com foco em aplicação prática dos conceitos fundamentais da biblioteca (componentização, estado e manipulação de listas) em um domínio de dados financeiros.