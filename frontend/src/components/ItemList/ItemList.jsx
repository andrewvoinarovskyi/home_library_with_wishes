import React, { useEffect, useState } from 'react';
import { fetchOwned } from '../../api/collectibleItems';
import ItemCard from '../ItemCard/ItemCard';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchOwned().then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h1>Моя Колекція</h1>
      <div>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
