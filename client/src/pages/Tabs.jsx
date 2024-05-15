import React, { useState } from "react";
import PieChart from "./PieChart";


function Tabs() {
  const data = [
    {
      label: "Sea",
      value: "sea",
    },
    {
      label: "Air",
      value: "air",
    },
    {
      label: "Land",
      value: "land",
    }
  ];

  const [activeTab, setActiveTab] = useState("sea");

  return (
    <div className="my-6 mx-10 py-6 px-8 border rounded-xl bg-white" >
      <div className="flex">
      <h2 className="ml-2 text-lg font-bold">Pie Chart Analysis</h2>
      <div className="flex justify-center mx-auto pb-4 space-x-8">
        {data.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            className={`text-gray-600 font-medium focus:outline-none ${
              activeTab === value
                ? "border-b-2 border-blue-500"
                : "hover:text-gray-900"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      </div>
      <div className="mt-4">
        {data.map(({ value, desc }) => (
          <div
            key={value}
            className={activeTab === value ? "block" : "hidden"}
          >
            <PieChart />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
