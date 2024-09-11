import React from "react";
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";

function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    fetch("")
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
