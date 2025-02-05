import { useState } from 'react';

export function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  const handelOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  }

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handelOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    )
  });

  let content = 'Select...';
  if (selection) {
    content = selection.label;
  }

  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}