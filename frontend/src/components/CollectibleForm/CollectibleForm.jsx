import { useEffect, useState } from 'react';

const CollectibleForm = ({
  initialValues,
  onSubmit,
  onCancel,
  submitLabel,
  isSubmitting,
  categories,
  statuses,
  className = '',
}) => {
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className={`grid-form ${className}`}>
      <input
        required
        placeholder='Назва'
        value={form.name}
        onChange={handleChange('name')}
      />
      <select value={form.category} onChange={handleChange('category')}>
        {categories.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>
      <select value={form.status} onChange={handleChange('status')}>
        {statuses.map((s) => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </select>
      <input
        placeholder='Пріоритет'
        value={form.priority}
        onChange={handleChange('priority')}
      />
      <input
        placeholder='Нотатки'
        value={form.notes}
        onChange={handleChange('notes')}
      />

      <div className='edit-actions'>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Зберігаю...' : submitLabel}
        </button>
        {onCancel && (
          <button type="button" className='secondary' onClick={onCancel}>
            Скасувати
          </button>
        )}
      </div>
    </form>
  );
};

export default CollectibleForm;

