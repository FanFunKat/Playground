const svgMap = {
  dog: 'svg/dog.svg',
  cat: 'svg/cat.svg',
  cow: 'svg/cow.svg',
  bird: 'svg/bird.svg',
  gator: 'svg/gator.svg',
  horse: 'svg/horse.svg',
}

export function AnimalShow({ type }) {
  return (
    <div>
      <img src={svgMap[type]} alt="animal" />
    </div>
  )
}