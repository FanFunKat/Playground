import { useState } from "react";

export function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <div key={item.id}>
        <div onClick={() => setActiveIndex(index)}>{item.label}</div>
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