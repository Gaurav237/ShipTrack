import React from 'react';
import FilterDiv from './FilterDiv';
import MilestonesChart from './MilestonesChart';
import TimeLinesChart from './TimeLinesChart';

function ContainerDiv() {
  return (
    <div className="flex flex-col justify-between py-2 px-6 rounded-xl">
      <FilterDiv />
      <div className='flex justify-between mt-8'>
        <MilestonesChart />
        <TimeLinesChart />
      </div>
    </div>
  );
}

export default ContainerDiv;
