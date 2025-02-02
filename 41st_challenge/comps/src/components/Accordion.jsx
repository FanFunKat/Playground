import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (nextIndex) => {
    if (activeIndex === nextIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    const icon = <span className="text-xl">
      {isActive ? <GoChevronDown /> : <GoChevronLeft />}
    </span>

    return (
      <div key={item.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b item-center cursor-pointer" onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isActive && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return (
    <div className="border-x border-t rounded">
      {renderedItems}
    </div>
  );
}