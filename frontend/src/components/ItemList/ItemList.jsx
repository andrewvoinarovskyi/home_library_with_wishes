import React, { useEffect, useState } from 'react';
import './ItemList.scss';
import { fetchOwned } from '../../api/collectibleItems';
import ItemCard from '../ItemCard/ItemCard';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchOwned().then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h1>Моя колекція</h1>
      <div className='item-list'>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
