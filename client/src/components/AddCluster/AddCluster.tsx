import Modal from 'react-modal';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { server } from '../../data/server';

const AddCluster = () => {
  const [clusterIP, setClusterIP] = useState('');
  const [grafanaPort, setGrafanaPort] = useState('');
  const [grafanaUsername, setGrafanaUsername] = useState('');
  const [grafanaPassword, setGrafanaPassword] = useState('');
  const [kubeviewPort, setKubeviewPort] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const [clusterData, setClusterData] = useState({
    clusterIP: '',
    grafanaPort: '',
    grafanaUsername: '',
    grafanaPassword: '',
    kubeviewPort: '',
  });

  const username = localStorage.getItem('username');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setClusterData({ ...clusterData, [name]: value });
  };

  const submitClusterData = (e: any) => {
    e.preventDefault();

    const addCluster = {
      clusterIP,
      grafanaPort,
      grafanaUsername,
      grafanaPassword,
      kubeviewPort,
      username,
    };
    console.log(addCluster);

    // Send the SkaleSafe username from localStorage to the server?
    const ssUsername = localStorage.getItem('username');
    // console.log('ssUsername in addCluster frontend: ', ssUsername);
    setIsOpen(false);
    axios
      .all([
        axios.post(`${server}/add-cluster`, addCluster),

        axios.post(`${server}/graf/add-dashboard`, {
          addCluster,
          ssUsername,
        }),
        axios.post(`${server}/graf/add-alerts`, {
          addCluster,
          ssUsername,
        }),
      ])
      .then(
        axios.spread((clusterResolved, dashboardResolved, alertsResolved) => {
          // All requests are now complete
          console.log('clusterResolved.data: ', clusterResolved.data);
          console.log('dashboardResolved.data: ', dashboardResolved.data);
          console.log('alertsResolved.data: ', alertsResolved.data);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };
  const inputField =
    'border-b-2 rounded-lg mb-4 h-11 px-2 border-sapphire-blue w-full focus:outline-none focus:border-fuzzy-wuzzy focus:border-b-3';

  const button =
    'px-8 py-3 mt-2 mr-2 mb-4 cursor-pointer rounded-md text-lg focus:scale-95 border-purple border-2 text-purple hover:text-off-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-purple hover:border-purple duration-[400ms,700ms] transition-[color,box-shadow]';

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="text-prussian-blue">
        Add Cluster
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        className="w-2/5 m-auto mt-40 px-6 rounded-lg shadow-xl bg-white border-b-8 border-primary-color"
      >
        <form className="p-12 relative" onSubmit={submitClusterData}>
          <h1 className="text-2xl mt-4 font-bold mb-8 text-prussian-blue">
            Add Your Cluster
          </h1>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="absolute text-xl top-8 right-4 text-purple border-2 border-off-white rounded-full px-4 py-2 font-extrabold hover:scale-110 hover:text-sapphire-blue"
          >
            X
          </button>
          <div className="divide-y divide-gray-200">
            <div className="relative">
              <input
                type="text"
                id="grafanaPort"
                className={inputField}
                name="grafanaPort"
                autoComplete="off"
                placeholder="Grafana Port"
                onChange={(e) => setGrafanaPort(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="clusterIP"
                className={inputField}
                name="clusterIP"
                autoComplete="off"
                placeholder="Cluster IP Address"
                onChange={(e) => setClusterIP(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="grafanaUsername"
                className={inputField}
                name="grafanaUsername"
                autoComplete="off"
                placeholder="Grafana Username"
                onChange={(e) => setGrafanaUsername(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="grafanaPassword"
                className={inputField}
                name="grafanaPassword"
                autoComplete="off"
                placeholder="Grafana Password"
                onChange={(e) => setGrafanaPassword(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="kubeviewPort"
                className={inputField}
                name="kubeviewPort"
                autoComplete="off"
                placeholder="KubeView Port"
                onChange={(e) => setKubeviewPort(e.target.value)}
              />
            </div>
            <button className={button} type="submit" value="add cluster">
              Add Cluster
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddCluster;

{
  /* <div>
      <button
        onClick={() => setIsOpen(true)}
        className='text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]'
      >
        Add Cluster
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        className='w-1/2 m-auto mt-40 px-6 rounded-lg shadow-xl bg-white border-b-8 border-primary-color'
      >
        <form className='p-12 relative' onSubmit={submitFormData}>
          <h1 className='text-2xl mt-4 font-bold mb-8 text-prussian-blue'>
            Add Your Cluster
          </h1>
          <button
            onClick={() => setIsOpen(false)}
            className='absolute text-xl top-8 right-4 text-purple border-2 border-off-white rounded-full px-4 py-2 font-extrabold hover:scale-110 hover:text-sapphire-blue'
          >
            X
          </button>
            <div className='divide-y divide-gray-200'>
              <form
                onSubmit={submitFormData}
                className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'
              >
                <div className='relative'>
                  <input
                    type='text'
                    id='grafanaPort'
                    className={inputField}
                    name='grafanaPort'
                    autoComplete='off'
                    placeholder='Grafana Port'
                    onChange={(e) => setGrafanaPort(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='clusterIP'
                    className={inputField}
                    name='clusterIP'
                    autoComplete='off'
                    placeholder='Cluster IP Address'
                    onChange={(e) => setClusterIP(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='grafanaUsername'
                    className={inputField}
                    name='grafanaUsername'
                    autoComplete='off'
                    placeholder='Grafana Username'
                    onChange={(e) => setGrafanaUsername(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='grafanaPassword'
                    className={inputField}
                    name='grafanaPassword'
                    autoComplete='off'
                    placeholder='Grafana Password'
                    onChange={(e) => setGrafanaPassword(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='kubeviewPort'
                    className={inputField}
                    name='kubeviewPort'
                    autoComplete='off'
                    placeholder='KubeView Port'
                    onChange={(e) => setKubeviewPort(e.target.value)}
                  />
                </div>
                <button className={button} type='submit' value='add cluster'>
                  Add Cluster
                </button>
        </form>
      </Modal>
    </div> */
}

// <div className='w-screen min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
//   <div className='relative w-1/2 py-3 mt-14 sm:max-w-xl sm:mx-auto'>
//     <div className='absolute inset-0 bg-gradient-to-r from-purple to-purple shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
//     <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
//       <div className='max-w-md mx-auto'>
//         <div>
//           <h1 className='text-2xl border-violet-500 mb-4 font-semibold'>
//             Add Your Cluster
//           </h1>
//         </div>
//         <div className='divide-y divide-gray-200'>
//           <form
//             onSubmit={submitFormData}
//             // action="{{ url('/') }}"
//             method='GET'
//             className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'
//           >
//             <div className='relative'>
//               <input
//                 type='text'
//                 id='grafanaPort'
//                 className={inputField}
//                 name='grafanaPort'
//                 autoComplete='off'
//                 placeholder='Grafana Port'
//                 onChange={(e) => setGrafanaPort(e.target.value)}
//               />
//             </div>
//             <div className='relative'>
//               <input
//                 type='text'
//                 id='clusterIP'
//                 className={inputField}
//                 name='clusterIP'
//                 autoComplete='off'
//                 placeholder='Cluster IP Address'
//                 onChange={(e) => setClusterIP(e.target.value)}
//               />
//             </div>
//             <div className='relative'>
//               <input
//                 type='text'
//                 id='grafanaUsername'
//                 className={inputField}
//                 name='grafanaUsername'
//                 autoComplete='off'
//                 placeholder='Grafana Username'
//                 onChange={(e) => setGrafanaUsername(e.target.value)}
//               />
//             </div>
//             <div className='relative'>
//               <input
//                 type='text'
//                 id='grafanaPassword'
//                 className={inputField}
//                 name='grafanaPassword'
//                 autoComplete='off'
//                 placeholder='Grafana Password'
//                 onChange={(e) => setGrafanaPassword(e.target.value)}
//               />
//             </div>
//             <div className='relative'>
//               <input
//                 type='text'
//                 id='kubeviewPort'
//                 className={inputField}
//                 name='kubeviewPort'
//                 autoComplete='off'
//                 placeholder='KubeView Port'
//                 onChange={(e) => setKubeviewPort(e.target.value)}
//               />
//             </div>
//             <div className='relative'>
//               <input
//                 type='submit'
//                 className='bg-transparent px-8 py-3 mt-6 cursor-pointer rounded-md text-lg focus:scale-95 border-violet-300 border-2 text-violet-800 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-purple duration-[400ms,700ms] transition-[color,box-shadow]'
//                 value='Add Cluster'
//                 onClick={
//                   //insert if (auth verified) logic here with functional block bearing .replace
//                   //url needs to be generic
//                   () =>
//                     window.location.replace(
//                       'http://127.0.0.1:4000/dashboard'
//                     )
//                 }
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
