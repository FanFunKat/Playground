import { useState } from 'react';
import { Header } from './Header';
import { Item } from './Item';


export const AppGrocery = () => {
  const [items, setItems] = useState([
    {
      name: "Apples",
      id: 1
    },
    {
      name: "Bananas",
      id: 2
    },
    {
      name: "Box of Pasta",
      id: 3
    },
    {
      name: "Cookies",
      id: 4
    }
  ]);

  const handleRemoveItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  return (
    <div className='grocery-list'>
      <Header
        title='My Grocery List'
        itemTotal={items.length}
      />
      {items.map(item =>
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          removeItem={handleRemoveItem}
        />
      )}
    </div>
  )
}