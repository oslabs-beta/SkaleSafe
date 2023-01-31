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
    <div id='alertstab' className="w-screen h-screen flex flex-col mt-24 w-1/3 ml-[30%] text-honeydew">
      <h1 className="center-self text-4xl font-bold uppercase tracking-wider">
        Configure Your Alerts
      </h1>
      <div className='h-3/6 flex flex-col items-start justify-evenly'>
        {alertTypes.map((item, idx) => (
          <Toggle key={idx} name={item} />
        ))}
      </div>

    </div>
  );
};

export default Alerts;
