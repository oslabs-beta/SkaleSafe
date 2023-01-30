import React from 'react';

type Props = {};

const KubeView = (props: Props) => {
  const kubeUrl = 'http://localhost:8080';

  return (
    <iframe
      title='KubeView'
      src={`${kubeUrl}/view/default-namespace`}
      width='100%'
      height='500'
      frameBorder='0'
    />
  );
};

export default KubeView;
