import { scalingData } from './ScalingData';

type Props = {};


const ScalingMetrics = (props: Props) => {
  
  return (
    <div
      id='scalingtab'
      className='w-screen h-screen flex flex-col items-center justify-evenly text-honeydew'
    >
      <div className='self-center text-4xl font-bold uppercase border-b-2 border-white pb-2 tracking-wider'>
        Scaling Metrics
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
        {scalingData.map((item: any) => (
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

export default ScalingMetrics;
