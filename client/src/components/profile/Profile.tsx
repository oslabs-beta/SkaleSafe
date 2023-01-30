import { Link, useLocation } from 'react-router-dom';

type Props = {}
// type Props = {
//     pathname: string,
//     outLinks: string
// };

// const Profile = (props: Props) => {

const Profile = (props: Props) => {


        //testing profile content
        function toggleLight(){
            let element = document.body
            element.classList.toggle('light-mode')
        
            const logoText = document.getElementById('colortestlogo');
           logoText.className = 'text-prussian-blue text-3xl pl-3'
        
           const logoBackground = document.getElementById('backgroundoflogo')
           logoBackground.className= "flex flex-row justify-evenly items-center bg-primary-color w-60 h-12 rounded-full"
          //change the className for 
        
          const homeLogo = document.getElementById('homeLogo')
          homeLogo.url="../../../assets/SkaleSafe.svg"
        
          }
          return (
        
            <div className="w-screen h-screen flex flex-col justify-start text-honeydew pt-20"> 
              <h1 className="self-center text-4xl font-bold uppercase tracking-wider">content holder || future settings</h1>
              <button className='border-b border-prussian-blue text-white text-md px-2 py-1 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]' 
        onClick={toggleLight}>
        <img src="../assets/light&dark-icon.png" />
                    Dark/Light icon
                </button>
            </div>
          )
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