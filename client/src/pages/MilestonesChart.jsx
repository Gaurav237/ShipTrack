import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as CHARTJS, Tooltip, Legend, ArcElement } from 'chart.js';

CHARTJS.register(Tooltip, Legend, ArcElement);

const MilestonesChart = () => {
  const data = {
    labels: ['BOOKED', 'DISCHARGED', 'ARRIVED', 'DELIVERED', 'RETURNED'],
    datasets: [
      {
        data: [60, 7, 7, 7, 19],
        backgroundColor : [
          'rgba(84, 16, 11, 1)',
          'rgba(242, 72, 53, 1)',
          'rgba(227, 135, 77, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(145, 111, 90, 1)',
        ]
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-1/2 flex flex-col items-center justify-center py-5 px-5 mr-6 bg-white rounded-xl">
      <div className='flex justify-between w-full'>
        <h2 className="text-lg font-semibold">Milestones</h2>
        <div className="border rounded-xl text-gray-400 px-3 py-1 rounded">
          IN-TRANSIT (463)
        </div>
      </div>
      
      <div className='flex h-60 items-center space-x-8'>
        <Pie data={data} options={options}/>
        <div className="flex flex-col items-left">
          {data.datasets[0].backgroundColor.map((color, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <div className="w-6 h-6 mr-2 rounded-full" style={{ backgroundColor: color }}></div>
              <span>{data.labels[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MilestonesChart;
