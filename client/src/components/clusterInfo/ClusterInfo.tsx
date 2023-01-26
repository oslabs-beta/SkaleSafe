
type Props = {};

const ClusterInfo = (props: Props) => {

  // we could eventually pass the iframes to this component dynamically?
  const iframes = [
  <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594159877&to=1674597759877&panelId=2" width="450" height="200" frameBorder="0"></iframe>,
  <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="450" height="200" frameBorder="0"></iframe>,
  <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="450" height="200" frameBorder="0"></iframe>,
  <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594159877&to=1674597759877&panelId=2" width="450" height="200" frameBorder="0"></iframe>,
  <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="450" height="200" frameBorder="0"></iframe>,
  <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="450" height="200" frameBorder="0"></iframe>,
  <iframe src="http://localhost:3002/graf/test" width="1350" height="900" frameBorder="0"></iframe>,
  <iframe src="http://localhost:3002/graf" width="1350" height="900" frameBorder="0"></iframe>,
];

  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <div className="self-center text-2xl my-8">My Cluster Info</div>
      <div className="flex flex-row flex-wrap self-center gap-8 mx-8">
           {iframes}
      </div>
    </div>
  )
};

export default ClusterInfo;