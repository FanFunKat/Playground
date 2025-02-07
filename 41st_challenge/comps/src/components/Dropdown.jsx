import { useState } from 'react';

export function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  const handelOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  }

  const renderedOptions = options.map((option) => {
    return (
      <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handelOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    )
  });

  // let content = 'Select...';
  // if (selection) {
  //   content = selection.label;
  // }

  return (
    <div className='w-48 relative'>
      <div className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={handleClick}>
        {value?.label || 'Select...'}
      </div>
      {isOpen && <div className='absolute top-full rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
    </div>
  );
}