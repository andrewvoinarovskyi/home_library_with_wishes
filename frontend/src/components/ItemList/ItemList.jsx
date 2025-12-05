import { useQuery } from '@tanstack/react-query';
import './ItemList.scss';
import { fetchOwned } from '../../api/collectibleItems';
import ItemCard from '../ItemCard/ItemCard';

const ItemList = () => {
  const { data: items = [], isLoading, error } = useQuery({
    queryKey: ['collectibleItems', 'owned'],
    queryFn: fetchOwned,
  });

  if (isLoading) {
    return (
      <div>
        <h1>Моя колекція</h1>
        <p>Завантаження...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Моя колекція</h1>
        <p style={{ color: 'red' }}>Помилка: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Моя колекція</h1>
      <div className='item-list'>
        {items.length === 0 ? (
          <p>Колекція порожня</p>
        ) : (
          items.map((item) => <ItemCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default ItemList;
