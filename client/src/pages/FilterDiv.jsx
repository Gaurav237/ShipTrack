import React from 'react';
import Dropdown from './DropDown';

function FilterDiv() {
  return (
    <div className="flex space-x-7 bg-white p-3 rounded-xl">
      <div className="flex items-center space-x-2">
        <h2 className='font-medium'>Type</h2>
        <Dropdown/>
      </div>
      <div className="flex items-center space-x-2">
        <h2 className='font-medium'>Date</h2>
        <Dropdown/>
      </div>
      <div className="flex items-center space-x-2">
        <h2 className='font-medium'>Period</h2>
        <Dropdown/>
      </div>

      {/* Buttons  */}
      <div className="flex space-x-4">
      <button
        className="border border-red-800 text-red-800 font-medium rounded-full px-4 py-2 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
        type="button"
      >
        Cancel
      </button>

      <button
        className="bg-red-800 text-white font-medium rounded-full px-4 py-2 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
        type="button"
      >
        Go
      </button>
    </div>
    </div>
  );
}

export default FilterDiv;
