import React, { useEffect, useState } from 'react';
import { fetchWishlist } from '../../api/collectibleItems.js';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist().then((data) => setWishlist(data));
  }, []);

  return (
    <div>
      <h1>Список побажань</h1>
      <ul>
        {wishlist.map((item) => (
          <li key={item.id}>
            {item.priority}. {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
