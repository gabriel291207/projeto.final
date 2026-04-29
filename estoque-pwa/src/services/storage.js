// Chave usada para salvar os produtos no localStorage
const KEY = "produtos";

// Função que busca os produtos salvos no navegador
export const getProdutos = () => {
  return JSON.parse(localStorage.getItem(KEY)) || []; 
};

// Função que salva a lista de produtos no navegador
export const saveProdutos = (produtos) => {
  localStorage.setItem(KEY, JSON.stringify(produtos));
};