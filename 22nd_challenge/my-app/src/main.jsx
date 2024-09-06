import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'

const items = [
  {
    name: "Apples",
    quantity: 5,
    id: 1
  },
  {
    name: "Bananas",
    quantity: 7,
    id: 2
  },
  {
    name: "Box of Pasta",
    quantity: 1,
    id: 3
  },
  {
    name: "Cookies",
    quantity: 12,
    id: 4
  }
]

const Header = ({ title, itemTotal }) => {
  return (
    <header>
      <h1>{title}</h1>
      <span className='total-items'>Items: {itemTotal}</span>
    </header>
  )
}

const Item = ({ name, quantity }) => {
  return (
    <div className='item'>
      <button className='remove-item' />
      <span className='item-name'>{name}</span>
      <Counter quantity={quantity} />
    </div>
  )
}

const Counter = ({ quantity }) => {
  return (
    <div className='quantity'>
      <span className='qty-label'>QTY</span>
      <button className='increment'>+</button>
      <button className='decrement'>-</button>
      <span className='quantity-amount'>{quantity}</span>
    </div>
  )
}

const App = ({ itemList }) => {
  return (
    <div className='grocery-list'>
      <Header
        title='My Grocery List'
        itemTotal={itemList.length}
      />
      {itemList.map(item =>
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
        />
      )}
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App itemList={items} />
  </StrictMode>
);

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

