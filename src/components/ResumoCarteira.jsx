function ResumoCarteira({ ativos }) {
  // Patrimônio total: soma de (preço × quantidade) de cada ativo
  const patrimonioTotal = ativos.reduce(
    (total, ativo) => total + ativo.precoAtual * ativo.quantidade,
    0
  );

  // Valorização média: média simples dos valorizacao12m de todos os ativos
  const valorizacaoMedia =
    ativos.reduce((soma, ativo) => soma + ativo.valorizacao12m, 0) / ativos.length;

  // Dividend Yield médio
  const dyMedio =
    ativos.reduce((soma, ativo) => soma + ativo.dividendYield, 0) / ativos.length;

  const corValorizacao = valorizacaoMedia >= 0 ? "text-green-600" : "text-red-600";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <p className="text-xs text-gray-500 uppercase">Patrimônio Total</p>
        <p className="text-xl font-bold">
          R$ {patrimonioTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <p className="text-xs text-gray-500 uppercase">Valorização Média</p>
        <p className={`text-xl font-bold ${corValorizacao}`}>
          {valorizacaoMedia.toFixed(2)}%
        </p>
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <p className="text-xs text-gray-500 uppercase">Dividend Yield Médio</p>
        <p className="text-xl font-bold">{dyMedio.toFixed(2)}%</p>
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <p className="text-xs text-gray-500 uppercase">Quantidade de Ativos</p>
        <p className="text-xl font-bold">{ativos.length}</p>
      </div>
    </div>
  );
}

export default ResumoCarteira;