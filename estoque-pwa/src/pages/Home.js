import ProdutoList from "../components/ProdutoList";

export default function Home({ produtos = [], onEdit, onDelete, filtro, setFiltro }) {
  return (
  <div
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      height: "100vh",
      padding: "20px",
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      backgroundBlendMode: "darken"
    }}
  >
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