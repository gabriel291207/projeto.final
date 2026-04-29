// Importação dos hooks e componentes
import { useEffect, useState } from "react";
import ProdutoForm from "./components/ProdutoForm";
import ProdutoList from "./components/ProdutoList";
import { getProdutos, saveProdutos } from "./services/storage";
import "./styles.css";

// Componente principal da aplicação
function App() {

  // Estado que armazena todos os produtos
  const [produtos, setProdutos] = useState([]);

  // Índice do produto que está sendo editado
  const [editIndex, setEditIndex] = useState(null);

  // Estado para o filtro de busca
  const [filtro, setFiltro] = useState("");

  // Carrega os produtos salvos ao iniciar o app
  useEffect(() => {
    setProdutos(getProdutos());
  }, []);

  // Função para salvar (criar ou editar) produto
  const handleSave = (produto) => {
    let novos = [...produtos];

    // Se estiver editando, atualiza
    if (editIndex !== null) {
      novos[editIndex] = produto;
      setEditIndex(null);
    } else {
      // Caso contrário, adiciona novo produto
      novos.push(produto);
    }

    // Atualiza o estado e salva no localStorage
    setProdutos(novos);
    saveProdutos(novos);
  };

  // Define qual item será editado
  const handleEdit = (index) => {
    setEditIndex(index);
  };

  // Remove um produto da lista
  const handleDelete = (index) => {
    const novos = produtos.filter((_, i) => i !== index);
    setProdutos(novos);
    saveProdutos(novos);
  };

  // Filtra produtos pelo nome
  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
  <div className="app">
    <h1>Sistema de Estoque</h1>

    <input
      className="search"
      placeholder="Buscar produto..."
      value={filtro}
      onChange={(e) => setFiltro(e.target.value)}
    />

    <div className="container">
      <div className="card">
        <ProdutoForm
          onSave={handleSave}
          produtoEditando={editIndex !== null ? produtos[editIndex] : null}
        />
      </div>

      <div className="card lista">
        <ProdutoList
          produtos={filtrados}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  </div>
);
}

export default App;