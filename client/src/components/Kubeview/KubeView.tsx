/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { server } from '../../data/server';

function KubeView() {
  // const kubePort = 8080;
  // ^get this variable from database
  // ^store this in .env file
  const username = localStorage.getItem('username');
  const [kubeUrl, setKubeUrl] = useState('');

  // fetch kubeUrl from DBs
  const handleFetchData = async () => {
    try {
      const userResponse = await fetch(
        `${server}/graf/kubeview?username=${username}`
      );
      const data = await userResponse.json();
      setKubeUrl(data.kubeUrl);
    } catch (err) {
      console.error('User kubeUrl could not be retrieved');
      return err;
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className="w-screen h-screen">
      <iframe
        className="h-screen"
        title="KubeView"
        src={`${kubeUrl}`}
        allow="same-origin"
        acceptCharset="UTF-8"
        accept-encoding="chunked"
        width="100%"
        // height='1000'
        frameBorder="0"
        loading="lazy"
      />
    </div>
  );
}

export default KubeView;
