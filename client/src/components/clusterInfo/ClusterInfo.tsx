import { grafArray } from './clusterInfoData';

type Props = {};

const ClusterInfo = (props: Props) => {
  // <iframe
  //   src='http://localhost:8888/graf/d-solo/alertmanager-overview/alertmanager-overview?orgId=1&refresh=30s&from=1674700023028&to=1674703623028&panelId=2'
  //   width='450'
  //   height='200'
  //   frameBorder='0'
  // ></iframe>

  // http://localhost:8888/graf/d/alertmanager-overview/alertmanager-overview?orgId=1&panelID=2
  // http://localhost:8888/graf/d/alertmanager-overview/alertmanager-overview?orgId=1
  // http://localhost:8888/graf/d/alertmanager-overview/alertmanager-overview?orgId=1&panelID=2&refresh=30s&viewPanel=2


  // http://localhost:8888/graf/d/YSh8G8T4z/node-exporter-nodes?orgId=1&refresh=30s&from=1674756711244&to=1674760311244&viewPanel=2
  // <iframe src="http://localhost:8888/graf/d-solo/YSh8G8T4z/node-exporter-nodes?orgId=1&refresh=30s&from=1674756729021&to=1674760329021&panelId=2" width="450" height="200" frameborder="0"></iframe>

  return (
    <div id='clustertab' className='w-screen h-screen flex flex-col items-center justify-evenly text-honeydew'>
      <div  className='self-center text-4xl font-bold uppercase tracking-wider'>
          My Cluster Info
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
        {/* let params = {`&panelID={item.ID}&refresh=30s&viewPanel={item.ID}`};
        let link = "http://localhost:3000/graf/test";
        let newlink = link + params; */}

        {/* console.log({`http://localhost:3000/test&panelId=${item.ID}&viewPanel=${item.ID}`}); */}
        {grafArray.map((item) => (
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

export default ClusterInfo;
