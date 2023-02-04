import { clusterData } from './clusterData';

type Props = {};


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
            src={`http://localhost:8888/graf/d-solo/YSh8G8T4z/node-exporter-nodes?orgId=1&panelId=${item.ID}`}
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
