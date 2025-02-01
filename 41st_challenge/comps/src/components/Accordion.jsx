import { useState } from "react";

export function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <div key={item.id}>
        <div>{item.label}</div>
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