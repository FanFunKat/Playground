import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'

const Header = ({ title, itemTotal }) => {
  return (
    <header>
      <h1>{title}</h1>
      <span className='total-items'>Items: {itemTotal}</span>
    </header>
  )
}

const Item = ({ name, removeItem, id }) => {
  return (
    <div className='item'>
      <button className='remove-item' onClick={() => removeItem(id)} />
      <span className='item-name'>{name}</span>
      <Counter />
    </div>
  )
}

const Counter = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQty = () => {
    setQuantity(prevQty => prevQty + 1);
  }

  const decrementQty = () => {
    if (quantity > 0) {
      setQuantity(prevQty => prevQty - 1);
    }
  }

  return (
    <div className='quantity'>
      <span className='qty-label'>QTY</span>
      <button className='increment' onClick={incrementQty}>+</button>
      <button className='decrement' onClick={decrementQty}>-</button>
      <span className='quantity-amount'>{quantity}</span>
    </div>
  )
}

const App = () => {
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

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);