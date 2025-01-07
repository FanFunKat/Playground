import { useState } from "react";
import { AnimalShow } from "./AnimalShow";
import styles from './App.module.css';

function getRandomAnimal() {
  const animals = ['dog', 'cat', 'cow', 'bird', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <div className={styles.app}>
      <button onClick={handleClick} >Add Animal</button>
      <div className={styles.animalList}>{renderedAnimals}</div>
    </div>
  )
}

export default App