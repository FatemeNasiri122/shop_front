import api from './api';

export const getProduct = async (id) => {
  const response = await api(`/get-product/${id}`);
  console.log(response);
  // const data = await response;
  return response.data.product;
};

export const getProducts = async (type, page, selectedItems, category, sortby) => {
  const response = await api(
    `/get-products/${type}/?page=${page}${selectedItems.join('')}${category}${sortby}`
  );
  console.log(response);
  // const data = await response;
  return response.data;
};

export const getSuggestedProducts = async () => {
  const response = await api(`get-suggested-product`);
  console.log(response);
  // const data = await response;
  return response.data;
};
