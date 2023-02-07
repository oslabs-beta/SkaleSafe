import { useEffect, useState } from 'react';

import { GiShipWheel } from 'react-icons/gi';
import { clusterData } from './clusterData';
import dashboardState from '../../../interfaces/dashboardState';

type Props = {};

// dashboard ID -> or3xtlo4k -> this part of URL will change... grab UID from db
// cluster URL -> http://localhost -> this part of URL will change... grab Cluster IP address from db
// grafana Port -> 8888 -> this part of URL will change... grab grafana port from db

const ClusterMetrics = (props: Props) => {
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
      const userResponse = await fetch(
        `http://localhost:3000/graf/clustermetrics?username=${username}`
      );
      const data = await userResponse.json();
      setUserData(data);
      console.log(data);
      if (data.valueOf.length !== 0) setDataAvailable(true);
    } catch (err) {
      console.error('User alerts metrics could not be retrieved');
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
        Cluster Health
      </div>
      {dataAvailable ? (
        <div className='flex flex-row flex-wrap justify-center items-center gap-8 py-5'>
          {clusterData.map((item: any, idx: number) => (
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
            Hang on one moment while we fetch your cluster data...
          </p>
          <GiShipWheel className='text-7xl animate-spin' />
        </div>
      )}
    </div>
  );
};

export default ClusterMetrics;
