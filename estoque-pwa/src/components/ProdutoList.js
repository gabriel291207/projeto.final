export default function ProdutoList({ produtos, onEdit, onDelete }) {
  return (
    <div>
      <h2>Estoque</h2>

      {produtos.map((p, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "5px" }}>
          <p><strong>{p.nome}</strong></p>
          <p>Preço: R$ {p.preco}</p>
          <p>Qtd: {p.quantidade}</p>
          <p>Categoria: {p.categoria}</p>

          <button onClick={() => onEdit(index)}>Editar</button>
          <button onClick={() => onDelete(index)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}