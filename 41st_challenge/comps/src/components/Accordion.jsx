import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (nextIndex) => {
    setActiveIndex(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    const icon = <span>
      {isActive ? <GoChevronDown /> : <GoChevronLeft />}
    </span>

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
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