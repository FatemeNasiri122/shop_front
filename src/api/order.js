import api from './api';

export const getOrders = async () => {
  const response = await api(`/get-order`);
  console.log(response);
  // const data = await response;
  return response.data.order;
};

export const addOrder = async (data) => {
  const response = await api.post(`/add-order`, { selectedAddress: data });
  console.log(response);
  // const data = await response;
  return response;
};
