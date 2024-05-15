import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left border rounded-full">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className=" font-medium rounded-lg text-sm w-48 px-5 py-2 text-left flex items-center justify-between"
        type="button"
      >
        <span className="truncate text-gray-500">Select</span>
        <svg className="w-2.5 h-2.5 ml-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {isOpen && (
        <div id="dropdown" className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-red-800 dark:hover:text-white">choice_1</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-red-800 dark:hover:text-white">choice_2</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-red-800 dark:hover:text-white">choice_3</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-red-800 dark:hover:text-white">choice_4</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
