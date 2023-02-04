import { clusterData } from './clusterData';

type Props = {};

// dashboard ID -> or3xtlo4k -> this part of URL will change... grab UID from db
// cluster URL -> http://localhost -> this part of URL will change... grab Cluster IP address from db
// grafana Port -> 8888 -> this part of URL will change... grab grafana port from db

const ClusterMetrics = (props: Props) => {
  
  return (
    <div
      id='clustertab'
      className='w-screen h-screen flex flex-col items-center justify-evenly border-b-2 border-white pb-2 text-honeydew'
    >
      <div className='self-center text-4xl font-bold uppercase tracking-wider'>
        Cluster Health
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
        {clusterData.map((item: any) => (
          <iframe
          //the or3xtlo4k should be coming from DB
          src={`http://localhost:8888/graf/d-solo/or3xtlo4k/skale-safe?orgId=1&panelId=${item.ID}`}
          
          width={item.width}
          height={item.height}
          frameBorder='0'
        ></iframe>
      
        ))}
      </div>
    </div>
  );
};

export default ClusterMetrics;
