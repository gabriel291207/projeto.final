// =========================
// src/pages/Home.js
// =========================

import ProdutoList from "../components/ProdutoList";

export default function Home({
  produtos = [],
  onEdit,
  onDelete,
  filtro,
  setFiltro
}) {
  return (
    <div>

      <input
        className="search"
        placeholder="Buscar produto..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <div className="container">
        <div className="card lista">

          <ProdutoList
            produtos={produtos}
            onEdit={onEdit}
            onDelete={onDelete}
          />

        </div>
      </div>
    </div>
  );
}