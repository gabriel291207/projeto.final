export default function ProdutoList({ produtos = [], onEdit, onDelete }) {
  return (
    <div>
      <h2>Estoque</h2>

      {produtos.map((p, index) => (
        <div key={index} className="item">
          <p><strong>{p.nome}</strong></p>
          <p>Preço: R$ {p.preco}</p>

          <p style={{ color: p.quantidade < 5 ? "red" : "black" }}>
            Qtd: {p.quantidade}
          </p>

          <p>{p.categoria}</p>

          <button onClick={() => onEdit(index)}>Editar</button>
          <button onClick={() => onDelete(index)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}