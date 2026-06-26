function CardAtivo({ ativo }) {
  // Desestrutura o objeto recebido via props
  const { ticker, tipo, precoAtual, dividendYield, valorizacao12m } = ativo;

  // Cor condicional baseada na valorização (positiva = verde, negativa = vermelha)
  const corValorizacao = valorizacao12m >= 0 ? "text-green-600" : "text-red-600";

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{ticker}</h3>
        <span className="text-xs uppercase text-gray-500">{tipo}</span>
      </div>

      <p className="text-2xl font-semibold">
        R$ {precoAtual.toFixed(2)}
      </p>

      <div className="mt-2 text-sm space-y-1">
        <p>
          Dividend Yield: <strong>{dividendYield}%</strong>
        </p>
        <p className={corValorizacao}>
          Valorização 12m: <strong>{valorizacao12m}%</strong>
        </p>
      </div>
    </div>
  );
}

export default CardAtivo;