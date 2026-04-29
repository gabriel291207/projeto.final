// Importação dos hooks do React
import { useState, useEffect } from "react";

export default function ProdutoForm({ onSave, produtoEditando }) {
  // Estado que armazena os dados do formulário
  const [produto, setProduto] = useState({
    nome: "",
    preco: "",
    quantidade: "",
    categoria: ""
  });

   // Estado para mensagens de erro
  const [erro, setErro] = useState("");

  // Quando estiver editando, carrega os dados no formulário
  useEffect(() => {
    if (produtoEditando) {
      setProduto(produtoEditando);
    }
  }, [produtoEditando]);

  // Atualiza os campos conforme o usuário digita
  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

  // Validação simples de campos obrigatórios  
    if (!produto.nome || !produto.preco || !produto.quantidade) {
      setErro("Preencha os campos obrigatórios!");
      return;
    }

    setErro("");
  // Envia os dados para o componente principal (App)
    onSave(produto);

  // Limpa o formulário após salvar  
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