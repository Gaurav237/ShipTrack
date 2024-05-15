import React, { useState } from "react";

function TopTabs() {
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
    <div className="mx-auto py-6 px-8" >
      <div className="flex">
      <div className="flex justify-center mx-auto pb-4 space-x-8 pr-10">
        {data.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            className={`text-gray-600 font-medium focus:outline-none ${
              activeTab === value
                ? "border-b-2 border-amber-900 text-amber-950"
                : "hover:text-gray-900"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      </div>
      <div className="">
        {data.map(({ value, desc }) => (
          <div
            key={value}
            className={activeTab === value ? "block" : "hidden"}
          >
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopTabs;
