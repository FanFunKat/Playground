import { BookShow } from "./BookShow"

export function BookList({ books }) {

  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />
  })

  return (
    <div className="book-list">{renderBooks}</div>
  )
}