import { useState } from "react";
import styles from './AnimalShow.module.css';

const svgMap = {
  dog: 'svg/dog.svg',
  cat: 'svg/cat.svg',
  cow: 'svg/cow.svg',
  bird: 'svg/bird.svg',
  gator: 'svg/gator.svg',
  horse: 'svg/horse.svg',
}

// eslint-disable-next-line react/prop-types
export function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  return (
    <div className={styles.animalShow} onClick={handleClick}>
      <img className={styles.animal} src={svgMap[type]} alt="animal" />
      <img
        className={styles.heart}
        src='/svg/heart.svg'
        alt="heart"
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  )
}