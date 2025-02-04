import { useState } from 'react';

export function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  const handelOptionClick = (option) => {
    setIsOpen(false)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handelOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    )
  });

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}