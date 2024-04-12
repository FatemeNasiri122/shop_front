import api from './api';

export const getProduct = async (id) => {
  const response = await api(`/get-product/${id}`);
  return response.data.product;
};

export const getProducts = async (page, selectedItems, category, sortby) => {
  const response = await api(
    `/get-products/?page=${page}${selectedItems.join('')}${category}${sortby}`
  );
  return response.data;
};

export const getSuggestedProducts = async () => {
  const response = await api(`/get-suggested-product`);
  return response.data;
};
