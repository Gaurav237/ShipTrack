import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as CHARTJS, Tooltip, Legend, ArcElement } from 'chart.js';

CHARTJS.register(Tooltip, Legend, ArcElement);

const PieChart = () => {
  const labels_ = ['NHAVA SHEVA, INDIA', 'HONG KONG', 'YANTIAN, CHINA', 'DALIAN, CHINA', 'Other'];
  const backgroundColors_ = [
    'rgba(84, 16, 11, 1)',
    'rgba(242, 72, 53, 1)',
    'rgba(227, 135, 77, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(145, 111, 90, 1)',
  ];

  const data1 = {
    labels: labels_,
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: backgroundColors_,
      },
    ],
  };

  const data2 = {
    labels: labels_,
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: backgroundColors_,
      },
    ],
  };

  const data3 = {
    labels: labels_,
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: backgroundColors_,
      },
    ],
  };

  const data4 = {
    labels: labels_,
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: backgroundColors_,
      },
    ],
  };

  const options = {
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  

  return (
    <div className="flex justify-between">
      <div className="w-48">
        <Pie data={data1} options={options} />
        <h2 className="font-medium text-center mt-2 mb-6">Origin Port</h2>
        <div className="flex flex-col items-center">
          {backgroundColors_.map((color, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <div className="w-6 h-6 mr-2 rounded-full" style={{ backgroundColor: color }}></div>
              <span>{labels_[index]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-48">
        <Pie data={data2} options={options}/>
        <h2 className="font-medium text-center mt-2 mb-6">Destination Port</h2>
        <div className="flex flex-col items-center">
          {backgroundColors_.map((color, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="w-6 h-6 mr-2 rounded-full" style={{ backgroundColor: color }}></div>
              <span>{labels_[index]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-48">
        <Pie data={data3} options={options}/>
        <h2 className="font-medium text-center mt-2 mb-6">Carrier</h2>
        <div className="flex flex-col items-center">
          {backgroundColors_.map((color, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="w-6 h-6 mr-2 rounded-full" style={{ backgroundColor: color }}></div>
              <span>{labels_[index]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-48">
        <Pie data={data4} options={options}/>
        <h2 className="font-medium text-center mt-2 mb-6">Consignee or Shipper</h2>
        <div className="flex flex-col items-center">
          {backgroundColors_.map((color, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="w-6 h-6 mr-2 rounded-full" style={{ backgroundColor: color }}></div>
              <span>{labels_[index]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-48">
        <Pie data={data4} options={options}/>
        <h2 className="font-medium text-center mt-2 mb-6">Milestones</h2>
        <div className="flex flex-col items-center">
          {backgroundColors_.map((color, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="w-6 h-6 mr-2 rounded-full" style={{ backgroundColor: color }}></div>
              <span>{labels_[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
