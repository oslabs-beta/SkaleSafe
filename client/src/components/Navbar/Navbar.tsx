import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks/Hooks';

// import LightOrDark from '../ModeSwitch/ModeSwitch';
import { Link } from 'react-router-dom';
import SignInModal from '../Signin/SigninModal';
import SignupModal from '../Signup/SignupModal';
import { setIsLoggedIn } from '../../../redux/Slices/UserSlice';

const Navbar = () => {
  const userName = useAppSelector((state) => state.user.userData.firstname);
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const dispatch = useAppDispatch();
  //ADD ID BELOW
  const outLinks =
    'text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]';
  //converted outLinks to variable, allowing LightOrDark to flip colors

  const inLinks = 'text-md px-2 py-1';

  const loggedOut =
    'fixed w-screen h-20 flex flex-row items-center justify-between bg-honeydew/10 px-14 shadow-md shadow-honeydew/10';
  const loggedIn =
    'w-screen h-20 flex flex-row items-center justify-between bg-gradient-to-r from-sapphire-blue/30 to-primary-color/30 px-20';

  return (
    <nav className={isLoggedIn ? loggedIn : loggedOut}>
      <Link to='/'>
        <div
          id='backgroundoflogo'
          className='flex flex-row justify-evenly items-center bg-prussian-blue w-60 h-12 rounded-full'
          onClick={() => dispatch(setIsLoggedIn(false))}
        >
          <img
            id='navbarlogo'
            className='w-8 max-h-sm '
            src='../../../assets/skaleSafe-light.png'
            alt='A fish inside a shield'
          />
          <h1 id='colortestlogo' className='text-primary-color text-3xl pl-3'>
            SkaleSafe
          </h1>
        </div>
      </Link>

      {!isLoggedIn ? (
        <ul className='flex flex-row gap-x-4'>
          {[
              ['Home', '#home'],
              ['About', '#about'],
              ['Demo', '#demo'],
              ['Documentation', '#documentation'],
              ['The Team', '#team'],
            ].map(([title, url]) => (
              <li>
                  <a href={url} className={outLinks}>{title}</a>
              </li>
            ))}
        </ul>) : (
          <></>
        )
      }

      <ul className='flex flex-row gap-x-4'>
        {isLoggedIn
          ? // PROFILE LINK CURRENTLY LEADS TO ADD CLUSTER INFO
            (  
              <li className='flex gap-x-4 items-center'>
                <div
                  id='navUser'
                  className='text-honeydew text-xl font-semi py-1'
                >
                  {`Welcome ${userName}`}
                </div>
                  <img
                    className='w-10 h-10 rounded-full hover:scale-110 hover:brightness-110'
                    src='../../../assets/profile.png'
                    alt='profile photo'
                  />
              </li>
            )
          : [<SignupModal />, <SignInModal />].map((modal) => (
              <li className='flex gap-x-8 items-center'>{modal}</li>
            ))}
      </ul>
    </nav>
  );
};

export default Navbar;
