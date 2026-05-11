// =========================
// src/components/ProdutoList.js
// =========================

import { useNavigate } from "react-router-dom";

export default function ProdutoList({
  produtos = [],
  onEdit,
  onDelete
}) {

  const navigate = useNavigate();

  return (
    <div>

      <h2>Estoque</h2>

      <p>Total de produtos: {produtos.length}</p>

      {produtos.map((p, index) => (
        <div key={index} className="item">

          <p>
            <strong>{p.nome}</strong>
          </p>

          <p>
            Preço: R$ {p.preco}
          </p>

          <p
            style={{
              color:
                p.quantidade < 5
                  ? "red"
                  : "black"
            }}
          >
            Qtd: {p.quantidade}
          </p>

          <p>{p.categoria}</p>

          <button
            onClick={() => {
              onEdit(index);
              navigate("/editar");
            }}
          >
            Editar
          </button>

          <button
            onClick={() => onDelete(index)}
          >
            Excluir
          </button>

        </div>
      ))}

    </div>
  );
}