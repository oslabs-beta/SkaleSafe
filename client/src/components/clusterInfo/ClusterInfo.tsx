

type Props = {};

const ClusterInfo = (props: Props) => {
  return (
    <div className="w-screen bg-prussian-blue">
      <h2>Cluster Information</h2>
      
      <div className="flex flex-row items-center justify-around">

      <div className='flex flex-col gap-20'>
        <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594159877&to=1674597759877&panelId=2" width="650" height="400" frameBorder="0"></iframe>
        <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="450" height="200" frameBorder="0"></iframe>
        <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674595207779&to=1674598807779&panelId=4" width="450" height="200" frameBorder="0"></iframe>
      </div>

      <div className='flex flex-col gap-20'>
        <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594159877&to=1674597759877&panelId=2" width="650" height="400" frameBorder="0"></iframe>
        <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674594666099&to=1674598266099&panelId=5" width="450" height="200" frameBorder="0"></iframe>
        <iframe src="http://localhost:8888/d-solo/ifKTBYTVk/node-exporter-nodes?orgId=1&refresh=30s&from=1674595207779&to=1674598807779&panelId=4" width="450" height="200" frameBorder="0"></iframe>
      </div>
      
      </div>
    </div>



  );
};

export default ClusterInfo;
