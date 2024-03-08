import api from './api';

export const getNews = async (paginate) => {
  const response = await api(`/news/?page=${paginate}`);
  console.log(response);
  return response.data;
};

export const singleNews = async (id) => {
  const response = await api(`/get-single-news/${id}`);
  console.log(response);
  return response.data;
};
