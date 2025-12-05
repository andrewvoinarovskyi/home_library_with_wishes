import { useQuery } from '@tanstack/react-query';
import { fetchWishlist } from '../../api/collectibleItems.js';

const Wishlist = () => {
  const { data: wishlist = [], isLoading, error } = useQuery({
    queryKey: ['collectibleItems', 'wishlist'],
    queryFn: fetchWishlist,
  });

  if (isLoading) {
    return (
      <div>
        <h1>Список побажань</h1>
        <p>Завантаження...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Список побажань</h1>
        <p style={{ color: 'red' }}>Помилка: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Список побажань</h1>
      <ul>
        {wishlist.length === 0 ? (
          <li>Список побажань порожній</li>
        ) : (
          wishlist.map((item) => (
            <li key={item.id}>
              {item.priority}. <span className='italic'>{item.name}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Wishlist;
