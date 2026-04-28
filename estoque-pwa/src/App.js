import { useEffect, useState } from "react";
import ProdutoForm from "./components/ProdutoForm";
import ProdutoList from "./components/ProdutoList";
import { getProdutos, saveProdutos } from "./services/storage";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    setProdutos(getProdutos());
  }, []);

  const handleSave = (produto) => {
    let novos = [...produtos];

    if (editIndex !== null) {
      novos[editIndex] = produto;
      setEditIndex(null);
    } else {
      novos.push(produto);
    }

    setProdutos(novos);
    saveProdutos(novos);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const novos = produtos.filter((_, i) => i !== index);
    setProdutos(novos);
    saveProdutos(novos);
  };

  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sistema de Estoque</h1>

      <input
        placeholder="Buscar produto..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <ProdutoForm
        onSave={handleSave}
        produtoEditando={editIndex !== null ? produtos[editIndex] : null}
      />

      <ProdutoList
        produtos={filtrados}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;