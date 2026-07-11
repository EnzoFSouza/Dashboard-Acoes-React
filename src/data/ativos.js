// Dados fixos — mesmo formato do scraper com python (ticker, preco, dy, etc)
// Export torna a variável acessível em outros arquivos
// Em outro arquivo: import { ativos } from "./data/ativos"

export const ativos = [
  {
    id: "PETR4",
    ticker: "PETR4",
    tipo: "acoes",
    precoAtual: 38.42,
    min52: 31.10,
    max52: 41.85,
    dividendYield: 12.3,
    valorizacao12m: 8.7,
    quantidade: 50,
  },
  {
    id: "VALE3",
    ticker: "VALE3",
    tipo: "acoes",
    precoAtual: 61.20,
    min52: 55.40,
    max52: 72.10,
    dividendYield: 9.1,
    valorizacao12m: -4.2,
    quantidade: 30,
  },
  {
    id: "HGLG11",
    ticker: "HGLG11",
    tipo: "fiis",
    precoAtual: 162.50,
    min52: 150.00,
    max52: 175.30,
    dividendYield: 8.4,
    valorizacao12m: 3.1,
    quantidade: 15,
  },
  {
    id: "MXRF11",
    ticker: "MXRF11",
    tipo: "fiis",
    precoAtual: 10.15,
    min52: 9.40,
    max52: 10.90,
    dividendYield: 11.2,
    valorizacao12m: 2.0,
    quantidade: 200,
  },
];