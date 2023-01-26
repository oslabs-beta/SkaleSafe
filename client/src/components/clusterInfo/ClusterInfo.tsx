
type Props = {};

const ClusterInfo = (props: Props) => {

  // we could eventually pass the iframes to this component dynamically?
  const iframes = [
  <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594159877&to=1674597759877&panelId=2" width="550" height="300" frameBorder="0"></iframe>,
  <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="550" height="300" frameBorder="0"></iframe>,
  <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="550" height="300" frameBorder="0"></iframe>,
  <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594159877&to=1674597759877&panelId=2" width="550" height="300" frameBorder="0"></iframe>,
  <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="550" height="300" frameBorder="0"></iframe>,
  <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="550" height="300" frameBorder="0"></iframe>
];

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-evenly text-honeydew">
      <div className="self-center text-4xl font-bold uppercase tracking-wider">My Cluster Info</div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
           {iframes}
      </div>
    </div>
  )
};

export default ClusterInfo;
