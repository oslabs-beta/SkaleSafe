import React, { useEffect, useState } from 'react';
import { GiShipWheel } from 'react-icons/gi';
import { alertsData } from './AlertsData';
import dashboardState from '../../../interfaces/dashboardState';
import { server } from '../../../data/server';
import axios from 'axios';

// import { UID } from '../../../../../server/controllers/grafana/createAlertsDashboard';

type Props = {};

function AlertsMetrics(props: Props) {
  const [dataAvailable, setDataAvailable] = useState(false);

  // use username from local storage to
  const username = localStorage.getItem('username');
  const [userData, setUserData] = useState<dashboardState>({
    grafPort: '',
    customUID: '',
    alertsUID: '',
  });

  const handleFetchData = async () => {
    try {
      const { data } = await axios.get(
        `${server}/graf/alerts?username=${username}`
      );
      setUserData(data);
      if (data.grafPort) {
        setTimeout(() => {
          setDataAvailable(true);
        }, 3000);
      }
    } catch (err) {
      console.error('User alerts metrics could not be retrieved');
      return err;
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  // while the first comment is true, the larger problem is that you're trying to return JSX from an async method which won't work.
  // you need to fetch your async data in componentDidMount() and call this.setState when your api returns instead of returning JSX directly

  // this needs to be removed, but is here to hopefully clean my commits
  // if (!userData) return null;

  //

  return (
    <div
      id="alertstab"
      className="w-screen h-screen flex flex-col items-center mt-10 text-honeydew"
    >
      <div className="text-4xl font-bold uppercase tracking-wider pt-10 pb-5">
        Alerting Metrics
      </div>
      {dataAvailable ? (
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 py-5">
          {alertsData.map((item: any, idx: number) => (
            <iframe
              // the or3xtlo4k should be coming from DB
              key={idx}
              src={`${userData.grafPort}/graf/d-solo/${userData.alertsUID}/Alerts-Dashboard?orgId=1&panelId=${item.ID}`}
              width={item.width}
              height={item.height}
              frameBorder="0"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col place-items-center pt-28 gap-y-16 justify-center">
          <p className="italic">Hang on while we fetch your alerts data...</p>
          <GiShipWheel className="text-7xl animate-pulse" />
        </div>
      )}
    </div>
  );
}

export default AlertsMetrics;
