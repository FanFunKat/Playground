import { useState } from "react";

const svgMap = {
  dog: 'svg/dog.svg',
  cat: 'svg/cat.svg',
  cow: 'svg/cow.svg',
  bird: 'svg/bird.svg',
  gator: 'svg/gator.svg',
  horse: 'svg/horse.svg',
}

export function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  return (
    <div onClick={handleClick}>
      <img src={svgMap[type]} alt="animal" />
      <img
        src='/svg/heart.svg'
        alt="heart"
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  )
}