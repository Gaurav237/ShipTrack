import React from 'react';
import FilterDiv from './FilterDiv';
import MilestonesChart from './MilestonesChart';
import TimeLinesChart from './TimeLinesChart';
import ScrollCard from './ScrollCard';
import TableDiv from './TableDiv';

function ContainerDiv() {
  return (
    <div className="flex flex-col justify-between py-4 rounded-xl w-full space-y-6">
      <FilterDiv />
      <div className='flex justify-between'>
        <MilestonesChart />
        <TimeLinesChart />
      </div>
      <div className='flex justify-between space-x-10'>
        <ScrollCard title={"Loading"}/>
        <ScrollCard title={"Discharge"} />
        <ScrollCard title={"Delivery"} />
      </div>
      <div className='flex justify-between space-x-10'>
        <ScrollCard title={"Shipper"}/>
        <ScrollCard title={"Consignee"} />
        <ScrollCard title={"Carrier"} />
      </div>
      <TableDiv />
    </div>
  );
}

export default ContainerDiv;
