/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect, useState } from 'react';

import { alertsData } from './AlertsData.ts';
import dashboardState from '../../../interfaces/dashboardState';

// import { UID } from '../../../../../server/controllers/grafana/createAlertsDashboard';

function AlertsMetrics() {
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
        `http://localhost:3000/graf/alerts?username=${username}`
      );
      const data = await userResponse.json();
      setUserData(data);
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

  //  http://localhost:8888/graf/d-solo/o33xe-0Vk/Alerts-Dashboard?orgId=1&panelId=2
  //

  return (
    <div
      id="alertstab"
      className="w-screen h-screen flex flex-col items-center mt-10 text-honeydew"
    >
      <div className="self-center text-4xl font-bold uppercase my-10 tracking-wider">
        Alerts
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
        {alertsData.map((item: any) => (
          <iframe
            src={`${userData.grafPort}/graf/d-solo/${userData.alertsUID}/Alerts-Dashboard?orgId=1&panelId=${item.ID}`}
            width={item.width}
            height={item.height}
            frameBorder="0"
          />
        ))}
      </div>
    </div>
  );
}

export default AlertsMetrics;
