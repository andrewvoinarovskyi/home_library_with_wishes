import React from 'react';

const categories = {book: 'Книга', game: 'Настільна гра', other: 'Інше'};
const ItemCard = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Категорія: {categories[item.category]}</p>
      <p>Статус: {item.status}______</p>
      <p>Рейтинг: {item.priority || 'None'}</p>
    </div>
  );
};

export default ItemCard;
