import React, { useState } from 'react';
import ItemList from '../Components/ItemList';
import ItemForm from '../Components/ItemForm';
import { Item } from '../Services/Mockservices';
import './HomePage.css';

const HomePage: React.FC = () => {
    const [itemToEdit, setItemToEdit] = useState<Item | null>(null);
    const [refreshItems, setRefreshItems] = useState(false);
  
    const handleEdit = (item: Item) => {
      setItemToEdit(item);
    };
  
    const handleSave = () => {
      setItemToEdit(null);
      setRefreshItems(!refreshItems); 
    };
  
    return (
      <div className="home-page">
        <h1>Home Page</h1>
        <ItemForm itemToEdit={itemToEdit} onSave={handleSave} />
        <ItemList onEdit={handleEdit} refresh={refreshItems} />
      </div>
    );
  };
  
  export default HomePage;