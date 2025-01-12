import './SearchBar.css';
import { useState } from "react";

export function SearchBar({ onSubmit }) {

  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //never ever ever do this:
    //onSubmit(document.querySelector('input).value);

    onSubmit(term);
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  };


  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term <br /></label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  )
}