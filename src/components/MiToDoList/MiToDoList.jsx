import React, { useReducer, useState } from 'react';

const customReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const CustomList = () => {
  const [items, dispatch] = useReducer(customReducer, []);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setNewItem('');
    }
  };

  const handleDeleteItem = id => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  return (
    <div>
      <h2>Custom List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type='text'
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add tarea</button>
      </div>
    </div>
  );
};

export default CustomList;
