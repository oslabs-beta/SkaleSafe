import React, { useState } from 'react';
import Toggle from './toggle/Toggle';

type Props = {
  description: string;
};

const Alerts = (props: Props) => {
  return (
    <div className='flex flex-col mt-20 gap-y-3'>
      <Toggle />
      <Toggle />
      <Toggle />
      <Toggle />
      <Toggle />
      <Toggle />
      <Toggle />
    </div>
  );
};

export default Alerts;
