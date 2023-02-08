import { useEffect, useState } from "react";
import dashboardState from "../../../interfaces/dashboardState";
import { scalingData } from './ScalingData.ts';
import { GiShipWheel } from 'react-icons/gi';
import axios from 'axios';

const ScalingMetrics = () => {
  const [dataAvailable, setDataAvailable] = useState(false);

  // use username from local storage to
  const username = localStorage.getItem('username');
  const [userData, setUserData] = useState<dashboardState>({
    grafPort: '',
    customUID: '',
    alertsUID: '',
  });

  // fetch alertsUID and grafPort from DBs
  const handleFetchData = async () => {
    try {

      const { data } = await axios.get(
        `http://localhost:3000/graf/ScalingMetrics?username=${username}`
      );
      setUserData(data);
      if (data.grafPort) {
        setTimeout(() => {
          setDataAvailable(true);
        }, 3000);
      }
    } catch (err) {
      console.error('Scaling metrics metrics could not be retrieved');
      return err;
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div
      id='clustertab'
      className='w-screen overflow-auto flex flex-col items-center justify-evenly text-honeydew'
    >
      <div className='text-4xl font-bold uppercase tracking-wider pt-10 pb-5'>
        Scaling Metrics
      </div>
      {dataAvailable ? (
        <div className='flex flex-row flex-wrap justify-center items-center gap-8 py-5'>
          {scalingData.map((item: any, idx: number) => (
            <iframe
              //the or3xtlo4k should be coming from DB
              key={idx}
              src={`${userData.grafPort}/graf/d-solo/${userData.customUID}/Custom-Dashboard?orgId=1&panelId=${item.ID}`}
              // src={`http://localhost:8888/graf/d-solo/or3xtlo4k/Custom-Dashboard?orgId=1&panelId=${item.ID}`}

              width={item.width}
              height={item.height}
              frameBorder='0'
            ></iframe>
          ))}
        </div>
      ) : (
        <div className='flex flex-col place-items-center pt-28 gap-y-16 justify-center'>
          <p className='italic'>
            Hang on while we fetch your cluster data...
          </p>
          <GiShipWheel className='text-7xl animate-pulse' />
        </div>
      )}
    </div>
  );
};

export default ScalingMetrics;
