import React, { useState } from 'react';

import Toggle from './toggle/Toggle';

const Alerts = () => {
  const alertTypes = [
    'Pod traffic above 70% threshold',
    'Alert 2',
    'Alert 3',
    'Alert 4',
    'Alert 5',
    'Alert 6',
    'Alert 7',
    'Alert 8',
  ];

  return (
    <div className='flex flex-col mt-14 w-1/3 ml-[35%] gap-y-3'>
      <h1 className='mb-14 pl-20 text-2xl text-gray-700 font-semibold'>
        Configure Your Alerts
      </h1>
      {alertTypes.map((item, idx) => (
        <Toggle key={idx} name={item} />
      ))}
    </div>
  );
};

export default Alerts;
