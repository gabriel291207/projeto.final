// =========================
// src/components/ProdutoForm.js
// =========================

import { useState, useEffect } from "react";

export default function ProdutoForm({
  onSave,
  produtoEditando
}) {

  // Estado do formulário
  const [produto, setProduto] = useState({
    nome: "",
    preco: "",
    quantidade: "",
    categoria: ""
  });

  const [erro, setErro] = useState("");

  // Carrega produto para edição
  useEffect(() => {
    if (produtoEditando) {
      setProduto(produtoEditando);
    }
  }, [produtoEditando]);

  // Atualiza inputs
  const handleChange = (e) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value
    });
  };

  // Salvar formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (
      !produto.nome ||
      !produto.preco ||
      !produto.quantidade
    ) {
      setErro("Preencha os campos obrigatórios!");
      return;
    }

    setErro("");

    onSave(produto);

    // Limpar formulário
    setProduto({
      nome: "",
      preco: "",
      quantidade: "",
      categoria: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      {erro && (
        <p style={{ color: "red" }}>
          {erro}
        </p>
      )}

      <input
        name="nome"
        placeholder="Nome do produto"
        value={produto.nome}
        onChange={handleChange}
      />

      <input
        name="preco"
        placeholder="Preço"
        value={produto.preco}
        onChange={handleChange}
      />

      <input
        name="quantidade"
        placeholder="Quantidade"
        value={produto.quantidade}
        onChange={handleChange}
      />

      <input
        name="categoria"
        placeholder="Categoria"
        value={produto.categoria}
        onChange={handleChange}
      />

      <button type="submit">
        Salvar
      </button>

    </form>
  );
}