import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import { getProdutos, saveProdutos } from "./services/storage";

import "./styles.css";

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
  <Router>
    <div className="app-bg">

      <div className="overlay">

        <h1>Sistema de Estoque</h1>

        <nav>
          <Link to="/">Estoque</Link> |{" "}
          <Link to="/cadastro">Cadastrar Produto</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                produtos={filtrados}
                onEdit={handleEdit}
                onDelete={handleDelete}
                filtro={filtro}
                setFiltro={setFiltro}
              />
            }
          />

          <Route
            path="/cadastro"
            element={
              <Cadastro
                onSave={handleSave}
                produtoEditando={editIndex !== null ? produtos[editIndex] : null}
              />
            }
          />
        </Routes>

      </div>
    </div>
  </Router>
);
}

export default App;