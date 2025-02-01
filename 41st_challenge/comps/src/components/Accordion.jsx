import { useState } from "react";

export function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? "active" : "";

    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>

      </div>
    );
  });

  return (
    <div>
      {renderedItems}
    </div>
  );
}