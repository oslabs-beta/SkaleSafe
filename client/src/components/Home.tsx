import React from 'react'

const Home =() => {

    function toggleTEST(){

      let element = document.body
      element.classList.toggle('light-mode')
  
      const logoText = document.getElementById('colortestlogo');
     logoText.className = 'text-prussian-blue text-3xl pl-3'
  
     const logoBackground = document.getElementById('backgroundoflogo')
     logoBackground.className= "flex flex-row justify-evenly items-center bg-primary-color w-60 h-12 rounded-full"
    
      let homeLogo = document.getElementById('homeLogo')

      if(homeLogo.src !== "../../../assets/SkaleSafe-color.svg"){
        homeLogo.src = '../../../assets/SkaleSafe.svg'}
      else{
        homeLogo.src = '../../../assets/SkaleSafe-color.svg'
      }
                //inverts image only once

                //terniary attempt
                // homeLogo.src = '../../../assets/SkaleSafe.svg' ? '../../../assets/SkaleSafe-color.svg':'../../../assets/SkaleSafe.svg'

       //attempt if terniary operators dont solve 
    //   else if(homeLogo.src === '../../../assets/SkaleSafe.svg'){
    //     homeLogo.src = '../../../assets/SkaleSafe-color.svg'
    //   }

    //   }
    }
    

    return (
        <div id="home" className="h-[48rem] w-screen bg-gradient-to-tr from-teal-blue flex flex-row items-center justify-evenly">
            <h1 className='text-6xl text-honeydew leading-relaxed tracking-wide m-0 p-0'>Auto-scaling<br/> made <span className='text-primary-color underline underline-offset-4 capitalize'>easier</span></h1>
            
            {/* For testing purposes ONLY */}
            <button className='border-b border-prussian-blue text-white text-md px-2 py-1 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]' 
onClick={toggleTEST}>TEST IMAGE TOGGLE</button>
                <img id='homeLogo' className="w-2/5" src='../../../assets/SkaleSafe-color.svg' alt='A fish inside a shield. SkaleSafe' />
            
        </div>
    )
    }


export default Home;
