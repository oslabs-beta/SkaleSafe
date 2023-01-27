import { Link, useLocation } from 'react-router-dom';

type Props = {
    pathname: string,
    outLinks: string
};

const Profile = (props: Props) => {





    return (
        <ul className="flex flex-row gap-x-4">
        {props.pathname === ('/dashboard' || '/dashboard/addCluster') ? (
                <li className='flex flex-row justify-center items-center'>
                    <p className='text-xl text-honeydew mr-4'>Welcome John Wick</p>
                    <img className='w-10 h-10 rounded-full' src='../../../assets/profile.png' alt='profile photo'/>
                </li>
            ) : (
                [['Sign In', '/users/signin'], ['Sign Up', '/users/signup']].map(([title, url]) => (
                    <li className='flex gap-x-8 items-center'>
                        <Link to={url}>
                            <button className={props.outLinks}>{title}</button>
                        </Link>
                    </li>
                ))
            )
        }
    </ul>
    )

}

export default Profile;