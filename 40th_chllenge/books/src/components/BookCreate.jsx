//Third version

import { useState } from "react";
// import { BooksContext } from "../context/books";
import { useBooksContext } from "../hooks/use-books-context";

export function BookCerate() {
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('')
  }

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Add!</button>
      </form>
    </div>
  )
}