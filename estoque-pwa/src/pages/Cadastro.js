import ProdutoForm from "../components/ProdutoForm";

export default function Cadastro({ onSave, produtoEditando }) {
  return (
  <div
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      padding: "20px",
      backgroundColor: "rgba(0,0,0,0.5)",
      backgroundBlendMode: "darken"
    }}
  >
    <div className="container">
      <div className="card">
        <ProdutoForm
          onSave={onSave}
          produtoEditando={produtoEditando}
        />
      </div>
    </div>
  </div>
);
}