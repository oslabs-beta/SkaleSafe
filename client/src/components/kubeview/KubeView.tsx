import React, {useState, useEffect} from 'react';


type Props = {};

const KubeView = (props: Props) => {
  const kubePort = 8080;
  // ^get this variable from database
  const kubeUrl = `http://localhost:${kubePort}/view/default-namespace`;
  // ^store this in .env file

  return (
    <div className='w-screen h-screen'>
      <iframe
        className='h-screen'
        title='KubeView'
        src={kubeUrl}
        allow='same-origin'
        accept-charset="UTF-8"
        accept-encoding="chunked"
        width='100%'
        // height='1000'
        frameBorder='0'
        loading="lazy"
      />
    </div>

  );
};

export default KubeView;


