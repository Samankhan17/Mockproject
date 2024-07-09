import React, { useState, useEffect } from 'react';
import { createItem, updateItem } from '../Services/Mockservices';
import { Item } from '../Services/Mockservices';
import './ItemForm.css';
interface ItemFormProps {
    itemToEdit: Item | null;
    onSave: () => void;
  }
  
  const ItemForm: React.FC<ItemFormProps> = ({ itemToEdit, onSave }) => {
    const [name, setName] = useState('');
  
    useEffect(() => {
      if (itemToEdit) {
        setName(itemToEdit.name);
      }
    }, [itemToEdit]);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (itemToEdit) {
        await updateItem(itemToEdit.id, name);
      } else {
        await createItem(name);
      }
      setName('');
      onSave();
    };
  
    return (
      <form onSubmit={handleSubmit} className="item-form">
        <h2>{itemToEdit ? 'Edit Item' : 'Add Item'}</h2>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <button type="submit">{itemToEdit ? 'Update' : 'Add'}</button>
      </form>
    );
  };
  
  export default ItemForm;      