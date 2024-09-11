import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";

function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    let activeFetch = true;
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=24&rating=g`)
      .then(response => {
        if (activeFetch) { setGifs(response.data.data) }
      })
      .catch(error => console.error("Error fetching data:", error));
    return () => { activeFetch = false; }
    // fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=24&rating=g`)
    //   .then(response => response.json())
    //   .then(data => setGifs(data.data))
    //   .catch(error => console.error("Error fetching data:", error));
  }, [query]);

  const handleQueryChange = (searchText) => {
    setQuery(searchText);
  };

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm changeQuery={handleQueryChange} />
        </div>
      </div>
      <div className="main-content">
        <GifList data={gifs} />
      </div>
    </div>
  );
}

export default App;
