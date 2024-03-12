import api from './api';

export const verfiyToken = async () => {
  const response = await api(`/verify-token`);
  return response.data;
};

export const signin = async (data) => {
  const response = await api.post(`/signin`, data);
  return response;
};

export const registerUser = async (data) => {
  const response = await api.post(`/register`, data);
  return response;
};

export const deleteAddress = async (data) => {
  const response = await api.post(`/delete-address`, data);
  return response;
};

export const addToCart = async (url, product, color, size, plusClicked) => {
  const response = await api.post(`/${url}`, {
    product,
    selectedColor: color,
    selectedSize: size,
    plusClicked
  });
  return response;
};

export const editUser = async (data) => {
  const response = await api.post(`/edit-user`, data);
  return response;
};

export const addToFavorite = async (data) => {
  const response = await api.post(`/add-to-favorite`, data);
  return response;
};

export const addAddress = async (data) => {
  const response = await api.post(`/add-address`, data);
  return response;
};

export const editPassword = async (data) => {
  const response = await api.post(`/edit-password`, data);
  return response;
};

export const logout = async () => {
  const response = await api.post(`/logout`);
  return response;
};
