import { alertsData } from './AlertsData.ts';
// import { UID } from '../../../../../server/controllers/grafana/createAlertsDashboard';

type Props = {};


const AlertsMetrics = async (props: Props) => {
  
  // use username from local storage to
  const username = localStorage.getItem('username');
  // fetch alertsUID and grafPort from DB
  const userData = await fetch('/graf/alerts', {
    body: JSON.stringify({ username: username }),
  })

  console.log('userData: ', userData);
  

  
  return (
    <div
      id='alertstab'
      className='w-screen h-screen flex flex-col items-center justify-evenly text-honeydew'
    >
      <div className='self-center text-4xl font-bold uppercase border-b-2 border-white pb-2 tracking-wider'>
        Alerts
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
        {alertsData.map((item: any) => (
          <iframe
            // src={`${userData.grafPort}/graf/d-solo/${alertsUID}/Alerts-Dashboard?orgId=1&panelId=${item.ID}`}
            src={`http://localhost:8888/graf/d-solo/l_UKUoA4k/Alerts-Dashboard?orgId=1&panelId=${item.ID}`}
            width={item.width}
            height={item.height}
            frameBorder='0'
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default AlertsMetrics;
