import React from "react"

function ScrollCard ({ title }) {
    const data = [
        { location: "NHAVA SHEVA, INDIA", count: 378 },
        { location: "HONG KONG, HONG KONG", count: 70 },
        { location: "YANTIAN, CHINA", count: 48 },
        { location: "DALIAN, CHINA", count: 29 },
        { location: "SHANGHAI, 31, CHINA", count: 26 },
        { location: "LONDON, GATEWAY PORT, UK", count: 23 },
        { location: "NHAVA SHEVA, INDIA", count: 378 },
        { location: "HONG KONG, HONG KONG", count: 70 },
        { location: "YANTIAN, CHINA", count: 48 },
        { location: "DALIAN, CHINA", count: 29 },
        { location: "SHANGHAI, 31, CHINA", count: 26 },
        { location: "LONDON, GATEWAY PORT, UK", count: 23 }
    ];

    return (
        <div className="w-1/3 bg-white py-4 px-4 border border-gray-200 rounded-xl">
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            <div className='h-60 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300'>
            <ul>
            {data.map((item, index) => (
                <li key={index} className="flex justify-between py-2 mr-3 border-b">
                <span>{item.location}</span>
                <span>{item.count}</span>
                </li>
            ))}
            </ul>
            </div>
        </div>
    );
}

export default ScrollCard;