import { Link, useLocation } from 'react-router-dom';

type Props = {}
// type Props = {
//     pathname: string,
//     outLinks: string
// };

// const Profile = (props: Props) => {

const Profile = (props: Props) => {

          return (<>
        
            <div className="w-screen h-screen flex flex-col justify-start text-honeydew pt-20"> 
              <h1 className="self-center text-4xl font-bold uppercase tracking-wider">PENDING PROFILE PAGE</h1>
            </div>
            </>)
        }

        //Original profile content
        //return  (<div>You have reached the Profile page!</div>)

    
    // // FIND THE MOST EFFICIENT WAY TO GET OUR USER'S NAME
    // const name = 'Testy McTesterson';

    // return (

    //     // MAKE THIS A LINK
    //     <li className='flex flex-row justify-center items-center'>
    //         <p className='text-xl text-honeydew mr-4'>Welcome {name}</p> 
    //         <img className='w-10 h-10 rounded-full' src='../../../assets/profile.png' alt='profile photo'/>
    //     </li>

    // )



export default Profile;