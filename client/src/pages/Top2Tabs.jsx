import React, { useState } from 'react';
import ContainerDiv from './ContainerDiv';

function Top2Tabs() {
  const [activeTab, setActiveTab] = useState('Shipments');

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 w-full">
      <div className="bg-white shadow rounded-lg p-2">
        <div className="flex space-x-8">
          <button
            className={`font-medium	py-2 px-4 rounded-xl mr-2 text-amber-950 ${activeTab === 'Shipments' ? 'bg-stone-400' : ''}`}
            onClick={() => setActiveTab('Shipments')}
          >
            Shipments
          </button>
          <button
            className={`font-medium	py-2 px-4 rounded-xl text-amber-950 ${activeTab === 'Containers' ? 'bg-stone-400' : ''}`}
            onClick={() => setActiveTab('Containers')}
          >
            Containers
          </button>
        </div>
        </div>
        <div className=" w-full">
          <ContainerDiv />
          {/* {activeTab === 'Shipments' ? <ContainerDiv /> : <ContainerDiv /> } */}
        </div>
    </div>
  );
}

export default Top2Tabs;
