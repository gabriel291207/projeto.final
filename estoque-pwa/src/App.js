// =========================
// src/App.js
// =========================

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Editar from "./pages/Editar";

import { getProdutos, saveProdutos } from "./services/storage";

import "./styles.css";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [filtro, setFiltro] = useState("");

  // Carrega produtos do localStorage
  useEffect(() => {
    setProdutos(getProdutos());
  }, []);

  // Salvar produto
  const handleSave = (produto) => {
    let novos = [...produtos];

    // Editar produto existente
    if (editIndex !== null) {
      novos[editIndex] = produto;
      setEditIndex(null);
    } else {
      // Criar novo produto
      novos.push(produto);
    }

    setProdutos(novos);
    saveProdutos(novos);
  };

  // Seleciona produto para edição
  const handleEdit = (index) => {
    setEditIndex(index);
  };

  // Excluir produto
  const handleDelete = (index) => {
    const novos = produtos.filter((_, i) => i !== index);

    setProdutos(novos);
    saveProdutos(novos);
  };

  // Filtrar produtos
  const filtrados = produtos.filter((p) =>
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

            {/* Página inicial */}
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

            {/* Página cadastro */}
            <Route
              path="/cadastro"
              element={
                <Cadastro
                  onSave={handleSave}
                  produtoEditando={null}
                />
              }
            />

            {/* Página edição */}
            <Route
              path="/editar"
              element={
                <Editar
                  onSave={handleSave}
                  produtoEditando={
                    editIndex !== null ? produtos[editIndex] : null
                  }
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