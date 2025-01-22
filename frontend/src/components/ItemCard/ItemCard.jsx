import React from 'react';
import './ItemCard.scss';

const categories = {book: 'Книга', game: 'Настільна гра', other: 'Інше'};
const ItemCard = ({ item }) => {
  return (
    <div className='card'>
      <div className='pic'>isdnvoi siwn evroivb oiwer nb</div>
      <h3 className="italic">{item.name}</h3>
      <p>Категорія: {categories[item.category]}</p>
      <p>К-ть гравців: 2-6</p>
      <p>Рейтинг: {item.priority || 'None'}</p>
    </div>
  );
};

export default ItemCard;
