
type Props = {};

const Settings = (props: Props) => {

  function toggleLight(){  //currently switching to light-mode and clicking on the logo or logout option preserves the setting
      //may be because of how logo is coded
      //not preserved if you go to the url directly i.e. entering '/home' from the dashboard or refresh the page 
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

export default Settings
