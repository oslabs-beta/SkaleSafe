import React from 'react';

type Props = {};

const KubeView = (props: Props) => {
  const kubePort = 8080;
  // ^get this variable from database
  const kubeUrl = `http://localhost:${kubePort}/view/default-namespace`;
  // ^store this in .env file

  return (
    <iframe
      title='KubeView'
      src={kubeUrl}
      allow='same-origin'
      width='100%'
      height='1000'
      frameBorder='0'
    />
  );
};

export default KubeView;