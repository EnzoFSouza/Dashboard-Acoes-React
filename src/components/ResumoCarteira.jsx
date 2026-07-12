function ResumoCarteira({ ativos, patrimonioTotal }) {

  if (ativos.length === 0) {
    return (
      <div className="bg-white border rounded-lg p-4 shadow-sm mb-6 text-gray-500 text-sm">
        Nenhum ativo cadastrado ainda.
      </div>
    );
  }

  // Médias calculadas no frontend — o backend não fornece esses agregados
  const valorizacaoMedia =
    ativos.reduce((soma, a) => soma + (a.lucro_prejuizo / a.total_investido) * 100, 0) /
    ativos.length;

  const dyMedio = 0; // DY não vem do banco ainda

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
        <p className="text-xs text-gray-500 uppercase">Rentabilidade Média</p>
        <p className={`text-xl font-bold ${corValorizacao}`}>
          {valorizacaoMedia.toFixed(2)}%
        </p>
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <p className="text-xs text-gray-500 uppercase">Dividend Yield Médio</p>
        <p className="text-xl font-bold text-gray-400">—</p>
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <p className="text-xs text-gray-500 uppercase">Quantidade de Ativos</p>
        <p className="text-xl font-bold">{ativos.length}</p>
      </div>
    </div>
  );
}

export default ResumoCarteira;