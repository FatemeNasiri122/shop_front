import api from './api';

export const contactUs = async (data) => {
  const response = await api.post(`/contact-us`, data);
  console.log(response);
  // const data = await response;
  return response;
};
