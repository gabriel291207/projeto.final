import { useState, useEffect } from "react";

export default function ProdutoForm({ onSave, produtoEditando }) {
  const [produto, setProduto] = useState({
    nome: "",
    preco: "",
    quantidade: "",
    categoria: ""
  });

  const [erro, setErro] = useState("");

  useEffect(() => {
    if (produtoEditando) {
      setProduto(produtoEditando);
    }
  }, [produtoEditando]);

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!produto.nome || !produto.preco || !produto.quantidade) {
      setErro("Preencha os campos obrigatórios!");
      return;
    }

    setErro("");
    onSave(produto);

    setProduto({ nome: "", preco: "", quantidade: "", categoria: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{produtoEditando ? "Editar Produto" : "Novo Produto"}</h2>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <input name="nome" placeholder="Nome" value={produto.nome} onChange={handleChange} />
      <input name="preco" placeholder="Preço" value={produto.preco} onChange={handleChange} />
      <input name="quantidade" placeholder="Quantidade" value={produto.quantidade} onChange={handleChange} />
      <input name="categoria" placeholder="Categoria" value={produto.categoria} onChange={handleChange} />

      <button type="submit">Salvar</button>
    </form>
  );
}