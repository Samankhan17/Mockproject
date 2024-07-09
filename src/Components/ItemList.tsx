import React, { useEffect, useState } from 'react';
import { getItems, deleteItem } from '../Services/Mockservices';
import { Item } from '../Services/Mockservices';
import './ItemList.css';

interface ItemListProps {
  onEdit: (item: Item) => void;
  refresh: boolean;  
}

const ItemList: React.FC<ItemListProps> = ({ onEdit, refresh }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, [refresh]);

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  const handleDelete = async (id: number) => {
    await deleteItem(id);
    fetchItems();
  };

  return (
    <div className="item-list">
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} 
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;