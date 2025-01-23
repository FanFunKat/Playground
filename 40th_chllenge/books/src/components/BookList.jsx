//third version

import { useContext } from "react";
import { BooksContext } from "../context/books";
import { BookShow } from "./BookShow";

export function BookList({ books, onDelete, onEdit }) {

  const { count, incrementCount } = useContext(BooksContext);

  const renderBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
  })

  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Click Me</button>
      {renderBooks}</div>
  )
}