import { clusterData } from './ClusterData';
import React, { useEffect, useState } from 'react';
import dashboardState from '../../../interfaces/dashboardState';
import { GiShipWheel } from 'react-icons/gi';

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
      const socket = new WebSocket(`ws://localhost:3000/graf/clustermetrics?username=${username}`);
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setUserData(data);
        if (data.grafPort) {
          setTimeout(() => {
            setDataAvailable(true);
          }, 3000);
        }
      };
      socket.onerror = (error) => {
        console.error('cluster metrics could not be retrieved', error);
      };
    } catch (err) {
      console.error('cluster metrics could not be retrieved', err);
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
            Hang on while we fetch your cluster data...
          </p>
          <GiShipWheel className='text-7xl animate-pulse' />
        </div>
      )}
    </div>
  );
};

export default ClusterMetrics;
