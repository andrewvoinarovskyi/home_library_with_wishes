import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import './ItemList.scss';
import {
  addCollectibleItem,
  deleteCollectibleItem,
  fetchOwned,
  updateCollectibleItem,
} from '../../api/collectibleItems';
import ItemCard from '../ItemCard/ItemCard';
import CollectibleForm from '../CollectibleForm/CollectibleForm';

const defaultForm = {
  name: '',
  category: 'book',
  status: 'owned',
  priority: '',
  notes: '',
};

const ItemList = () => {
  const queryClient = useQueryClient();
  const [createInitial, setCreateInitial] = useState(defaultForm);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(defaultForm);

  const { data: items = [], isLoading, error } = useQuery({
    queryKey: ['collectibleItems', 'owned'],
    queryFn: fetchOwned,
  });

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: ['collectibleItems', 'owned'] });
    queryClient.invalidateQueries({ queryKey: ['collectibleItems'] });
  };

  const createMutation = useMutation({
    mutationFn: addCollectibleItem,
    onSuccess: () => {
      invalidate();
      setCreateInitial({ ...defaultForm });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }) => updateCollectibleItem(id, payload),
    onSuccess: () => {
      invalidate();
      setEditingId(null);
      setEditForm(defaultForm);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCollectibleItem,
    onSuccess: () => invalidate(),
  });

  const categories = useMemo(
    () => [
      { value: 'book', label: 'Книга' },
      { value: 'game', label: 'Настільна гра' },
      { value: 'other', label: 'Інше' },
    ],
    []
  );

  const statuses = useMemo(
    () => [
      { value: 'owned', label: 'У колекції' },
      { value: 'wishlist', label: 'Хочу' },
    ],
    []
  );

  const handleCreate = (payload) => {
    createMutation.mutate(payload);
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditForm({
      name: item.name || '',
      category: item.category || 'book',
      status: item.status || 'owned',
      priority: item.priority || '',
      notes: item.notes || '',
    });
  };

  const handleUpdate = (payload) => {
    if (!editingId) return;
    updateMutation.mutate({ id: editingId, payload });
  };

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

      <section className='card form-card'>
        <h3>Додати новий предмет</h3>
        <CollectibleForm
          initialValues={createInitial}
          onSubmit={handleCreate}
          submitLabel={createMutation.isPending ? 'Створюю...' : 'Додати'}
          isSubmitting={createMutation.isPending}
          categories={categories}
          statuses={statuses}
        />
        {createMutation.isError && (
          <p style={{ color: 'red' }}>Помилка: {createMutation.error.message}</p>
        )}
      </section>

      <div className='item-list'>
        {items.length === 0 ? (
          <p>Колекція порожня</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className='item-card-wrapper'>
              <ItemCard {...item} />

              {editingId === item.id ? (
                <CollectibleForm
                  initialValues={editForm}
                  onSubmit={handleUpdate}
                  onCancel={() => {
                    setEditingId(null);
                    setEditForm(defaultForm);
                  }}
                  submitLabel={updateMutation.isPending ? 'Зберігаю...' : 'Зберегти'}
                  isSubmitting={updateMutation.isPending}
                  categories={categories}
                  statuses={statuses}
                  className='edit-form'
                />
              ) : (
                <div className='item-actions'>
                  <button
                    type="button"
                    className='secondary'
                    onClick={() => startEdit(item)}
                  >
                    Редагувати
                  </button>
                  <button
                    type="button"
                    className='danger'
                    onClick={() => deleteMutation.mutate(item.id)}
                    disabled={deleteMutation.isPending}
                  >
                    {deleteMutation.isPending ? 'Видаляю...' : 'Видалити'}
                  </button>
                </div>
              )}
              {deleteMutation.isError && (
                <p style={{ color: 'red' }}>
                  Помилка: {deleteMutation.error.message}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemList;
