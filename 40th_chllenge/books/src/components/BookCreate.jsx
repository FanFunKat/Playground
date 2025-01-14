import { useState } from "react";

export function BookCerate({ onCreate }) {
  const [title, setTitle] = useState('');
  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Add New Book!</button>
      </form>
    </div>
  )
}