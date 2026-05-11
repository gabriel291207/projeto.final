// =========================
// src/pages/Cadastro.js
// =========================

import ProdutoForm from "../components/ProdutoForm";

export default function Cadastro({ onSave, produtoEditando }) {
  return (
    <div className="container">
      <div className="card">

        <h2>Novo Produto</h2>

        <ProdutoForm
          onSave={onSave}
          produtoEditando={produtoEditando}
        />

      </div>
    </div>
  );
}