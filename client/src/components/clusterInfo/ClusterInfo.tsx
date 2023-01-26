
type Props = {};

const ClusterInfo = (props: Props) => {

  // we could eventually pass the iframes to this component dynamically?


  const iframes = [
  // <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594159877&to=1674597759877&panelId=2" width="450" height="200" frameBorder="0"></iframe>,
  // <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="450" height="200" frameBorder="0"></iframe>,
  // <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="450" height="200" frameBorder="0"></iframe>,
  // <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594159877&to=1674597759877&panelId=2" width="450" height="200" frameBorder="0"></iframe>,
  // <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="450" height="200" frameBorder="0"></iframe>,
  <iframe className="w-full h-full lg:w-2/5 lg:h-2/5" src="http://localhost:8888/graf/d-solo/alertmanager-overview/alertmanager-overview?orgId=1&refresh=30s&from=1674700023028&to=1674703623028&panelId=3" width="450" height="200" frameBorder="0"></iframe>,
  <iframe className="w-full h-full lg:w-2/5 lg:h-2/5" src="http://localhost:8888/graf/d-solo/alertmanager-overview/alertmanager-overview?orgId=1&refresh=30s&from=1674700023028&to=1674703623028&panelId=2" width="450" height="200" frameBorder="0"></iframe>,
  <iframe className="w-full h-full lg:w-2/5 lg:h-2/5" src="http://localhost:3002/graf/test" frameBorder="0"></iframe>,
  <iframe className="w-full h-full lg:w-2/5 lg:h-2/5" src="http://localhost:3002/graf"  frameBorder="0"></iframe>,
  // <iframe src="http://localhost:8888/graf/d/PohUG8o4k/node-exporter-use-method-node?orgId=1&refresh=30s" width="1350" height="900" frameBorder="0"></iframe>
];

  const flex = 'w-full h-screen flex flex-row flex-wrap justify-evenly items-center'

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-evenly text-honeydew pt-20">
      <div className="self-center text-4xl font-bold uppercase tracking-wider">My Cluster Info</div>
      <div className="w-full h-screen flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:gap-0 justify-evenly items-center px-10">
           {iframes}
      </div>
    </div>
  )
};

export default ClusterInfo;
