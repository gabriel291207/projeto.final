// Componente responsável por exibir os produtos cadastrados
export default function ProdutoList({ produtos, onEdit, onDelete }) {
  return (
    <div>
      <h2>Estoque</h2>

      {/* Percorre a lista de produtos */}
      {produtos.map((p, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "5px" }}>

          {/* Exibição dos dados */}
          <p><strong>{p.nome}</strong></p>
          <p>Preço: R$ {p.preco}</p>
          <p>Qtd: {p.quantidade}</p>
          <p>Categoria: {p.categoria}</p>

          {/* Botões de ação */}
          <button onClick={() => onEdit(index)}>Editar</button>
          <button onClick={() => onDelete(index)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}