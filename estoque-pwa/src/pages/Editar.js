// =========================
// src/pages/Editar.js
// =========================

import ProdutoForm from "../components/ProdutoForm";

export default function Editar({ onSave, produtoEditando }) {
  return (
    <div className="container">
      <div className="card">

        <h2>Editar Produto</h2>

        <ProdutoForm
          onSave={onSave}
          produtoEditando={produtoEditando}
        />

      </div>
    </div>
  );
}