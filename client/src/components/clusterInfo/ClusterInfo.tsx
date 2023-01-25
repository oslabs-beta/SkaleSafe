

type Props = {};

const ClusterInfo = (props: Props) => {
  return <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    // height: '100vh',
  }}
>
    <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594159877&to=1674597759877&panelId=2" width="450" height="200" frameBorder="0"></iframe>
    <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="450" height="200" frameBorder="0"></iframe>
    <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674595207779&to=1674598807779&panelId=4" width="450" height="200" frameBorder="0"></iframe>
    </div>;
};

export default ClusterInfo;
