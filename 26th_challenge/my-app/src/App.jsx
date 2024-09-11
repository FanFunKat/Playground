import React, { useState, useEffect } from "react";
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";

function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=r3EcdDb2hI0q2TRbgnvBje8G8h7FT5J2&limit=24&rating=g")
      .then(response => response.json())
      .then(responseData => { setGifs(responseData.data) })
      .catch(error => {
        console.error("Error fetching and parsing data:", error)
      });
  }, []);

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </div>
      <div className="main-content">
        <GifList />
      </div>
    </div>
  );
}

export default App;
