import React from 'react';

const Card = ({ title, value, icon, bgColor }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow rounded-lg p-4 m-2 w-64">
      <div>
        <h2 className="text-gray-500 text-sm">{title}</h2>
        <p className="text-xl font-semibold">{value}</p>
      </div>
      <div className={`w-12 h-12 flex items-center justify-center ${bgColor} rounded-full`}>
        {icon}
      </div>
    </div>
  );
};

export default Card;
