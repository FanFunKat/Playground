import { useState } from 'react';
import { BookCerate } from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books, { id: 123, title }
    ]
    setBooks(updatedBooks);
  }

  return (
    <div>
      <BookCerate onCreate={createBook} />
    </div>
  )
}

export default App