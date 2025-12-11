const API_URL = '/api/collectible_items';

export const fetchCollectibleItems = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return response.json();
};

export const fetchWishlist = async () => {
  const response = await fetch(`${API_URL}?status=wishlist`);
  if (!response.ok) {
    throw new Error('Failed to fetch wishlist');
  }
  return response.json();
};

export const fetchOwned = async () => {
  const response = await fetch(`${API_URL}?status=owned`);
  if (!response.ok) {
    throw new Error('Failed to fetch owned items');
  }
  return response.json();
};

export const addCollectibleItem = async (item) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error('Failed to add item');
  }
  return response.json();
};

export const updateCollectibleItem = async (id, item) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error('Failed to update item');
  }
  return response.json();
};

export const deleteCollectibleItem = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete item');
  }
  return true;
};
