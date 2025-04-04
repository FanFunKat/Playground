//third version

import { useBooksContext } from "../hooks/use-books-context.js";
import { BookShow } from "./BookShow";

export function BookList() {
  const { books } = useBooksContext();

  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />
  })

  return (
    <div className="book-list">
      {renderBooks}
    </div>
  )
}