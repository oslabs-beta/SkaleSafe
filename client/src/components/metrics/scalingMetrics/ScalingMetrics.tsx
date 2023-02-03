import { scalingData } from './scalingData';

type Props = {};

// recreate this component called alerts metrics
// need a component and the data structure 

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
        {/* let params = {`&panelID={item.ID}&refresh=30s&viewPanel={item.ID}`};
        let link = "http://localhost:3000/graf/test";
        let newlink = link + params; */}

        {/* console.log({`http://localhost:3000/test&panelId=${item.ID}&viewPanel=${item.ID}`}); */}
        {scalingData.map((item: any) => (
          <iframe
            src={`http://localhost:8888/graf/d-solo/YSh8G8T4z/node-exporter-nodes?orgId=1&panelId=${item.ID}`}
            // src={`http://localhost:3000/graf/test&panelId=${item.ID}`}

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
