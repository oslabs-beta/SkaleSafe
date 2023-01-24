import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import React from "react";

const ContactUs = () => {

  const developer = 'flex flex-col rounded-xl items-center justify-between h-3/5 w-1/5 py-10 bg-gradient-to-tr from-sapphire-blue/80 to-light-blue/80'

  return (
    <div className='h-[48rem] w-screen bg-honeydew flex items-center justify-center'>
      <div className="h-full w-full flex flex-rox gap-20 items-center justify-center px-20">
        {['Bethany Mattern', 'Leonardo Brian Campos', 'Daniel Doody', 'Kelvin Shamy', 'Sang Rea Han'].map((name) => (
            <div className={developer}>
              {/* image does not need to be static; can reference our profile pics in linked in for example */}
              <h2>{name}</h2>
              <img className="w-10 max-h-sm" src='../../../assets/SkaleSafe-nobg.png' alt="A fish inside a shield"/> 
              <p>This is where the bio can go</p>
              <div className="flex flex-row flex-wrap gap-4">
                {/* <h3>Contact Us:</h3> */}
                <AiFillLinkedin href="" size={30}/>
                <AiFillGithub href="" size={30}/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    
  )
}

export default ContactUs;
