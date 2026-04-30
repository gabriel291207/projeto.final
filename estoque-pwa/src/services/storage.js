const KEY = "produtos";

export const getProdutos = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveProdutos = (produtos) => {
  localStorage.setItem(KEY, JSON.stringify(produtos));
};