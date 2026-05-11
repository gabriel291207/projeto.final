// =========================
// src/services/storage.js
// =========================

// Chave usada no localStorage
const KEY = "produtos";

// Buscar produtos
export const getProdutos = () => {
  return JSON.parse(
    localStorage.getItem(KEY)
  ) || [];
};

// Salvar produtos
export const saveProdutos = (produtos) => {
  localStorage.setItem(
    KEY,
    JSON.stringify(produtos)
  );
};