import React, { useState } from 'react';

type Props = {};

const Toggle = (props: Props) => {
  const [toggle, setToggle] = useState(true);

  const switchColor = toggle
    ? 'bg-white'
    : 'bg-violet-500 transform translate-x-5';

  const onOffColor = toggle ? 'text-gray-400' : 'text-gray-800 font-semibold';
  const toggleBackground = toggle ? 'bg-gray-300' : 'bg-gray-200';

  return (
    <>
      <div className='flex flex-grid justify-center items-center '>
        <p className={`mr-3 ${onOffColor}`}>{toggle ? 'Off' : 'On'}</p>

        {/* Toggle container */}
        <div
          className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${toggleBackground} rounded-full p-1 cursor-pointer`}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {/* Switch */}
          <div
            className={`md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ${switchColor} ease-in-out`}
          ></div>

          {/* Message */}
        </div>
        <p className='ml-8 text-gray-800'>Pod traffic above 70% threshold</p>
      </div>
    </>
  );
};

export default Toggle