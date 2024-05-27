import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import GroceryList from './GroceryList';
import Footer from './Footer';


const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];


function App() {
  

  // memasukan groceryItems kedalam isi dan menjadi agar isi items menjadi groceryItems
  const [items, setItems] = useState(groceryItems);

  // memasukan item kedalam items
  function handleAddItem(item) {
    // console.log([...items, item])
    // set items jadi item
    setItems([...items, item])
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }


  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header/>
      <Form onAddItem={handleAddItem}/>
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
      <Footer items={items} />
    </div>
  );
}

export default App;

// 1:10:12   : https://www.youtube.com/watch?v=HX2kAHnCEjY
