import { useEffect, useState } from 'react';

import SignInData from '../interfaces/signin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let tryAgain = <div></div>;

const SignIn = () => {
  const navigate = useNavigate();
  const [clusterURL, setClusterURL] = useState('');
  const [kubernetesPort, setKubernetesPort] = useState('');
  const [clusterName, setClusterName] = useState('');
  const [grafanaURL, setGrafanaURL] = useState('');
  const [thanosPort, setThanosPort] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [formData, setFormData] = useState<SignInData>({
    username: '',
    password: '',
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitFormData = (e: any) => {
    e.preventDefault();

    // const newUser = {
    //   email,
    //   password,
    //   clusterURL,
    //   kubernetesPort,
    //   clusterName,
    //   grafanaURL,
    //   thanosPort,
    // };


    axios
      .post('http://localhost:3000/users/signin', formData)
      .then((res) => {
        if (res.status === 200) {
          // console.log(formData.username);

          // Using Local Storage to track user/permissions:
          // local storage functions:  https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear
          localStorage.setItem('username', formData.username);
          // to retrieve username... use localStorage.getItem(keyname)
          // to delete username (session)... use localStorage.clear()
          setIsSignedIn(true);
          navigate('/dashboard');

          // THIS CODE IS NOT GETTING HIT UPON INCORRECT LOGIN ATTEMPT
        } else tryAgain = <div className="text-red-700">Login credentials unrecognized: Please try again.</div>;
        // else add red text (Login credentials unrecognized, please try again)

      })
      .catch((err) => {
        console.log(err);
      });

    setFormData({
      username: '',
      password: '',
    });

    // reset states
    // setClusterURL('');
    // setKubernetesPort('');
    // setClusterName('');
    // setGrafanaURL('');
    // setThanosPort('');
  };
  const inputField =
    'border-b-2 rounded-lg mb-4 h-11 px-2 border-sapphire-blue w-full focus:outline-none focus:border-fuzzy-wuzzy focus:border-b-3';
  const active =
    'text-prussian-blue font-semibold border-b-2 border-prussian-blue pt-1 text-2xl';

  return (
    <div className='w-screen flex flex-row justify-center sm:py-20 lg:py-48'>
      <div className='relative w-1/2 py-3 sm:max-w-xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-teal-blue/90 to-light-blue/90 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-gradient-to-r from-honeydew/90 to-primary-color/90 shadow-lg sm:rounded-3xl sm:p-20'>
          <div className='max-w-md mx-auto mb-[-50px]'>
            <div className='flex place-content-center gap-x-20 mt-[-30px] mb-10'>
              <h1 className={active}>Welcome</h1>
            </div>
            <div className='divide-y divide-gray-200'>
              <form
                onSubmit={submitFormData}
                className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'
              >
                <div>
                  {/* Email */}
                  <div className='relative'>
                    <input
                      type='username'
                      id='username'
                      className={inputField}
                      name='username'
                      autoComplete='off'
                      value={formData.username}
                      placeholder='Username'
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  {/* Password */}
                  <div className='relative'>
                    <input
                      type='password'
                      id='password'
                      className={inputField}
                      name='password'
                      autoComplete='off'
                      value={formData.password}
                      placeholder='Your Password'
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className='relative flex-flex-row'>
                    <button
                      type='submit'
                      className='px-8 py-3 mt-6 mr-2 cursor-pointer rounded-md text-lg focus:scale-95 border-sapphire-blue border-2 text-sapphire-blue hover:text-off-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-sapphire-blue hover:border-sapphire-blue duration-[400ms,700ms] transition-[color,box-shadow]'
                    >
                      Sign In
                    </button>
                    {tryAgain}
                    {/* <div className="text-red-700">Login credentials unrecognized: Please try again.</div> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
