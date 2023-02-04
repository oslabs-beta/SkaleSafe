import { Link, useLocation } from 'react-router-dom';

import { useAppSelector } from '../../../redux/hooks/hooks';

type Props = {}
// type Props = {
//     pathname: string,
//     outLinks: string
// };


const Profile = (props: Props) => {

    const firstname = useAppSelector(state => state.user.userData.firstname);
    const lastname = useAppSelector(state => state.user.userData.lastname);
    const username = useAppSelector(state => state.user.userData.username);
    const email = useAppSelector(state => state.user.userData.email);

    const outLinks =
    'text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]';

    return (
      <div className="w-screen h-screen flex-col justify-start text-teal-blue pt-32">
        <div>
            <div className="w-96 mx-auto bg-off-white relative shadow rounded-lg">
                <div className="flex justify-center">
                        <img id='profileBorder' src='../../../assets/profile.png' alt='profile photo' className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white"/>
                </div>
                
                <div className="mt-16">
                    <h1 className="font-bold text-center text-4xl">My Profile</h1>
                    
                    <div className="my-8 px-8">
                        <a href="#" className="block rounded-lg text-center text-2xl leading-6 px-6 py-3 hover:text-light-blue hover:scale-110">Edit Profile Info</a>
                    </div>

                    <div className="w-full">
                        <div className="mt-8 w-full flex flex-col items-center text-l">
                            <a className="w-full border-t py-4 pl-6 pr-3">
                                First Name: 
                                <span className="font-bold">  {firstname}</span>
                            </a>

                            <a className="w-full border-t py-4 pl-6 pr-3">
                                Last Name:
                                <span className="font-bold">  {lastname}</span>
                            </a>

                            <a className="w-full border-t py-4 pl-6 pr-3">
                                Username: 
                                <span className="font-bold">  {username}</span>
                            </a>

                            <a className="w-full border-t py-4 pl-6 pr-3">
                                Email: 
                                <span className="font-bold">  {email}</span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Profile;
