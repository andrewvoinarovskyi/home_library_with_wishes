import './ItemCard.scss';

const categories = {book: 'Книга', game: 'Настільна гра', other: 'Інше'};
const ItemCard = ({ name, category, priority, notes, status }) => {
  return (
    <div className='card'>
      <div className='pic'>Picture</div>
      <h3 className="italic">{name}</h3>
      <p className='no-wrap'>Категорія: {categories[category]}</p>
      <p>К-ть гравців: 2-6</p>
      <p>Рейтинг: {priority || 'None'}</p>
      <p>Нотатки: {notes || 'None'}</p>
      <p>Статус: {status || 'None'}</p>
    </div>
  );
};

export default ItemCard;
