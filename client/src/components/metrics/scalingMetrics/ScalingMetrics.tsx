import { scalingData } from './ScalingData.ts';
import { useEffect, useState } from "react";
import dashboardState from "../../../interfaces/dashboardState";

const ScalingMetrics = () => {
    // use username from local storage to
    const username = localStorage.getItem('username')
    const [userData, setUserData] = useState<dashboardState>({
      grafPort: '',
      customUID: '', 
      alertsUID: '',
    });
    
    // fetch alertsUID and grafPort from DBs
    const handleFetchData = async () => {
      try {
        const userResponse = await fetch(`http://localhost:3000/graf/ScalingMetrics?username=${username}`)
        const data = await userResponse.json();
        setUserData(data);
      } catch (err) {
        console.error('User alerts metrics could not be retrieved');
        return err;
      }
    }
  
    useEffect(() => {
      handleFetchData();
    },[])
  
  return (
    <div
      id='scalingtab'
      className='w-screen h-screen flex flex-col items-center mt-10 mx-10 text-honeydew'
    >
      <div className='text-4xl font-bold uppercase tracking-wider my-10'>
        Scaling Metrics
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
        {scalingData.map((item: any) => (
          <iframe
            src={`${userData.grafPort}/graf/d-solo/${userData.customUID}/Custom-Dashboard?orgId=1&panelId=${item.ID}`}
            // src={`http://localhost:8888/graf/d-solo/YSh8G8T4z/node-exporter-nodes?orgId=1&panelId=${item.ID}`}
            width={item.width}
            height={item.height}
            frameBorder='0'
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default ScalingMetrics;
