import { grafArray } from './clusterInfoData';

type Props = {};

const ClusterInfo = (props: Props) => {
  // <iframe
  //   src='http://localhost:8888/graf/d-solo/alertmanager-overview/alertmanager-overview?orgId=1&refresh=30s&from=1674700023028&to=1674703623028&panelId=2'
  //   width='450'
  //   height='200'
  //   frameBorder='0'
  // ></iframe>

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-evenly text-honeydew'>
      <div className='self-center text-4xl font-bold uppercase tracking-wider'>
        My Cluster Info
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
        {grafArray.map((item) => (
          <iframe
            src='http://localhost:8888/graf/d-solo/alertmanager-overview/alertmanager-overview?orgId=1&refresh=30s&from=1674700023028&to=1674703623028&panelId={item.ID}'
            width={item.width}
            height={item.height}
            frameBorder='0'
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default ClusterInfo;
