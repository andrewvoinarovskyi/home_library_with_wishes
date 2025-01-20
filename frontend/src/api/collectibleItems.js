import axios from 'axios';

const API_URL = '/api/collectible_items';

export const fetchCollectibleItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchWishlist = async () => {
  const response = await axios.get(`${API_URL}?status=wishlist`);
  return response.data;
};

export const fetchOwned = async () => {
  const response = await axios.get(`${API_URL}?status=owned`);
  return response.data;
};

export const addCollectibleItem = async (item) => {
  const response = await axios.post(API_URL, item);
  return response.data;
};
