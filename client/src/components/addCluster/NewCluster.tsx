import React from 'react';

const NewCluster = () => {
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
              <form className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
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

export default NewCluster;
