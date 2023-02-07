import { useState } from 'react';

type Props = {
  name: string;
};

const Toggle = (props: Props) => {
  const { name } = props;
  const [toggle, setToggle] = useState(true);

  const switchColor = toggle
    ? 'bg-primary-color'
    : 'bg-honeydew transform translate-x-6';

  const onOffColor = toggle ? 'text-honeydew' : 'text-honeydew font-semibold';
  const toggleBackground = toggle ? 'bg-honeydew' : 'bg-primary-color';

  return (
    <div className='flex flex-row justify-left items-center '>
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
      <p className='ml-8 text-honey-dew'>{name}</p>
    </div>

  );
};

export default Toggle;
