import { useState } from "react";

export function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (nextIndex) => {
    setActiveIndex(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>{item.label}</div>
        {isActive && <div>{item.content}</div>}
      </div>
    );
  });

  return (
    <div>
      {renderedItems}
    </div>
  );
}