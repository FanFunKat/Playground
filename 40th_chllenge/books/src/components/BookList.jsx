import { BookShow } from "./BookShow"

export function BookList({ books, onDelete }) {

  const renderBooks = books.map((book) => {
    return <BookShow onDelete={onDelete} key={book.id} book={book} />
  })

  return (
    <div className="book-list">{renderBooks}</div>
  )
}