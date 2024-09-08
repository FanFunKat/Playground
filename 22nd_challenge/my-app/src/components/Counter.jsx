import { useState } from 'react';

export const Counter = () => {
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