import { Counter } from "./Counter"

export const Item = ({ name, removeItem, id }) => {
  return (
    <div className='item'>
      <button className='remove-item' onClick={() => removeItem(id)} />
      <span className='item-name'>{name}</span>
      <Counter />
    </div>
  )
}