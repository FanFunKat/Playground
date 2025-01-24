//Third version

import { useEffect } from 'react';
import { BookCerate } from './components/BookCreate';
import { BookList } from './components/BookList';
import { useBooksContext } from './hooks/use-books-context';

function App() {
  // const { fetchBooks } = useContext(BooksContext);
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCerate />
    </div>
  )
}

export default App