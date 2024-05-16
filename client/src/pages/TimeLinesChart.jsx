import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as CHARTJS, Tooltip, Legend, ArcElement } from 'chart.js';

CHARTJS.register(Tooltip, Legend, ArcElement);

const TimeLinesChart = () => {
  const data = {
    labels: ['ON TIME', 'LATE'],
    datasets: [
      {
        data: [97, 3],
        backgroundColor : [
            'rgba(75, 192, 192, 1)',
            'rgba(227, 135, 77, 1)',
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
    <div className="flex flex-col items-center justify-center py-5 p-14 bg-white rounded-xl">
      <div className='w-full'>
        <h2 className="text-lg font-semibold">TimeLines</h2>
      </div>
      
      <div className='flex h-60 items-center space-x-8 mt-2'>
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

export default TimeLinesChart;
