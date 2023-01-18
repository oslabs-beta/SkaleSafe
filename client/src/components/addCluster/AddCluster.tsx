import axios from 'axios';
import React, { useState } from 'react';

const AddCluster = () => {
  const [clusterURL, setClusterURL] = useState('');
  const [kubernetesPort, setKubernetesPort] = useState('');
  const [clusterName, setClusterName] = useState('');
  const [grafanaURL, setGrafanaURL] = useState('');
  const [thanosPort, setThanosPort] = useState('');

  const submitFormData = (e) => {
    e.preventDefault();

    const newUser = {
      clusterURL,
      kubernetesPort,
      clusterName,
      grafanaURL,
      thanosPort,
    };
    console.log(newUser);

    axios.post('http://localhost:3002/add-cluster', newUser);

    // reset states
    // setClusterURL('');
    // setKubernetesPort('');
    // setClusterName('');
    // setGrafanaURL('');
    // setThanosPort('');
  };

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative w-1/2 py-3 sm:max-w-xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-violet-300 to-violet-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          <div className='max-w-md mx-auto'>
            <div>
              <h1 className='text-2xl border-violet-500 font-semibold'>
                Add Your Cluster
              </h1>
            </div>
            <div className='divide-y divide-gray-200'>
              <form
                onSubmit={submitFormData}
                // action="{{ url('/') }}"
                method='GET'
                className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'
              >
                <div className='relative'>
                  <input
                    type='text'
                    id='clusterURL'
                    name='clusterURL'
                    placeholder='Cluster URL'
                    onChange={(e) => setClusterURL(e.target.value)}
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                  />
                  <label
                    htmlFor='clusterURL'
                    className='absolute cursor-text left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Cluster URL
                  </label>
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='kubernetesPort'
                    name='kubernetesPort'
                    placeholder='Kubernetes Port'
                    onChange={(e) => setKubernetesPort(e.target.value)}
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                  />
                  <label
                    htmlFor='kubernetes port'
                    className='absolute cursor-text left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Kubernetes Port
                  </label>
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='pw'
                    name='pw'
                    placeholder='Thanos (sidecar) Port'
                    onChange={(e) => setThanosPort(e.target.value)}
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                  />
                  <label
                    htmlFor='thanos port'
                    className='absolute cursor-text left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Thanos (sidecar) Port
                  </label>
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='clusterName'
                    name='clusterName'
                    placeholder='Cluster Name'
                    onChange={(e) => setClusterName(e.target.value)}
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                  />
                  <label
                    htmlFor='cluster name'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Cluster Name
                  </label>
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='grafanaURL'
                    name='grafanaURL'
                    placeholder='grafanaURL'
                    onChange={(e) => setGrafanaURL(e.target.value)}
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                  />
                  <label
                    htmlFor='grafana url'
                    className='absolute cursor-text left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Grafana URL
                  </label>
                </div>
                <div className='relative'>
                  <input
                    type='submit'
                    className='bg-transparent px-8 py-3 mt-10 cursor-pointer rounded-md text-lg focus:scale-95 border-violet-300 border-2 text-violet-800 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-violet-500 duration-[400ms,700ms] transition-[color,box-shadow]'
                    value='Add Cluster'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCluster;

// <div className='wrapper fadeInDown'>
// <div id='formContent'>
//   <div className='fadeIn first'>
//     <h1>Logo</h1>
//   </div>

//   <form
//     onSubmit={submitFormData}
//     // action="{{ url('/') }}"
//     method='GET'
//   >
//     {/* first name */}
//     <input
//       type='text'
//       id='clusterURL'
//       className='fadeIn second'
//       name='clusterURL'
//       placeholder='Cluster URL'
//       onChange={(e) => setClusterURL(e.target.value)}
//     />
//     {/* last name */}
//     <input
//       type='text'
//       id='kubernetesPort'
//       className='fadeIn second'
//       name='kubernetesPort'
//       placeholder='Kubernetes Port'
//       onChange={(e) => setKubernetesPort(e.target.value)}
//     />
//     {/* thanosPort */}
//     <input
//       type='text'
//       id='pw'
//       className='fadeIn third'
//       name='pw'
//       placeholder='Thanos (sidecar) Port'
//       onChange={(e) => setThanosPort(e.target.value)}
//     />
//     {/* city */}
//     <input
//       type='text'
//       id='clusterName'
//       className='fadeIn third'
//       name='clusterName'
//       placeholder='Cluster Name'
//       onChange={(e) => setClusterName(e.target.value)}
//     />
//     {/* grafanaURL */}
//     <input
//       type='text'
//       id='grafanaURL'
//       className='fadeIn third'
//       name='grafanaURL'
//       placeholder='grafanaURL'
//       onChange={(e) => setGrafanaURL(e.target.value)}
//     />
//     <input
//       type='submit'
//       className='fadeIn todo-button'
//       style={{ marginTop: 20 }}
//       value='Sign Up'
//     />
//   </form>

//   <div id='formFooter'>
//     <a className='underlineHover' href='#'>
//       Forgot Password?
//     </a>
//   </div>
// </div>
// </div>
