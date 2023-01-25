

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
    <iframe src="http://localhost:3002/graf/test" width="1350" height="900" frameBorder="0"></iframe>
  
  
    </div>;
};

export default ClusterInfo;
