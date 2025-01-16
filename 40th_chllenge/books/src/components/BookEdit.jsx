import { useState } from "react";

export function BookEdit({ book }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.taeget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">
        Save
      </button>
    </form>
  )
}