function CardAtivo({ ativo }) {
  const {
    nome,
    tipo,
    preco_atual,
    quantidade_total,
    total_investido,
    valor_atual,
    lucro_prejuizo,
  } = ativo;

  const corLucro = lucro_prejuizo >= 0 ? "text-green-600" : "text-red-600";
  const rentabilidade = total_investido > 0
    ? ((lucro_prejuizo / total_investido) * 100).toFixed(2)
    : "0.00";

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">

      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold">{nome}</h3>
        <span className="text-xs uppercase text-gray-500">{tipo}</span>
      </div>

      {/* Preço atual */}
      <p className="text-2xl font-semibold mb-3">
        R$ {preco_atual.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </p>

      {/* Dados da posição */}
      <div className="text-sm space-y-1 text-gray-700">
        <p>Quantidade: <strong>{quantidade_total}</strong></p>
        <p>
          Total investido:{" "}
          <strong>
            R$ {total_investido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </strong>
        </p>
        <p>
          Valor atual:{" "}
          <strong>
            R$ {valor_atual.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </strong>
        </p>
        <p className={corLucro}>
          Lucro/Prejuízo:{" "}
          <strong>
            R$ {lucro_prejuizo.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            {" "}({rentabilidade}%)
          </strong>
        </p>
      </div>
    </div>
  );
}

export default CardAtivo;