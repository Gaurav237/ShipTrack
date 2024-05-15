// ProfileCard.js
import React, { useState } from 'react';

function ProfileCard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center p-2 bg-white rounded-lg shadow-xs"
      >
        <div className="p-2 mr-2 text-orange-500 bg-orange-100 rounded-full">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 9a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 10-.001 9.999A5 5 0 009 11z" />
          </svg>
        </div>
        <div className='px-1'>
          <p className="text-xs font-bold text-gray-600">
            Edward William
          </p>
          <p className="text-xs text-gray-600">
            Admin
          </p>
        </div>
        <div className="ml-auto text-gray-600">
          <svg
            className={`w-4 h-4 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l6 6a1 1 0 01-1.414 1.414L10 5.414 4.707 10.707a1 1 0 01-1.414-1.414l6-6A1 1 0 0110 3z" clipRule="evenodd" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg">
          {/* Dropdown content */}
          <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
          <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Help</a>
          <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
