import { Planet } from "./components/Planet.jsx";
import { useState, useEffect } from "react";

export function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('/planets.json')
      .then(response => response.json())
      .then(data => setPlanets(data))
      .catch(error => console.error('Error fetching planets data:', error));
  }, []);

  return (
    <div className="container">
      {planets.map(planet => (
        <Planet
          key={planet.name}
          {...planet}
        />
      ))}
    </div>
  );
}
export 