

//only working on /home route
const LightOrDark = () => { //ONLY TOGGLES ONCE
    //separate with if logic referencing url to see if dashboard can be manipulated separately
        //needs to be done for db/home button to work and not give errors

    //main toggler

    let element = document.body
    element.classList.toggle('light-mode')




if (window.location.pathname === '/dashboard'){
//INVERTS DB PAGE
    //invert db section background and font
    const dbBg = document.getElementById('dashboardbg')
    dbBg.className = 'flex flex-col p-3 bg-prussian-blue shadow w-60'
   
    const dbText = document.getElementById('dbText')
    dbText.className ='text-xl text-honeydew pl-4 font-bold'
   
    const scalingOption = document.getElementById('scalingoption')
    scalingOption.className = 'text-honeydew'
    const alertsOption = document.getElementById('alertsoption')
    alertsOption.className = 'text-honeydew'
    const clusterOption = document.getElementById('clusteroption')
    clusterOption.className = 'text-honeydew'
    const kubeOption = document.getElementById('kubeoption')
    kubeOption.className = 'text-honeydew'
    const settingsOption = document.getElementById('settingsoption')
    settingsOption.className = 'text-honeydew'
    const logoutOption = document.getElementById('logoutoption')
    logoutOption.className = 'text-honeydew'

    const alertsTab = document.getElementById('alertstab')
    alertsTab.className = "w-screen h-screen flex flex-col mt-24 w-1/3 ml-[30%] text-prussian-blue"

    const alertsStatus = [...document.getElementsByClassName('mr-3')]
    for (let i = 0; i <alertsStatus.length; i++){
    alertsStatus[i].className = 'mr-3 text-prussian-blue'};

    //not working; hardcoding these elements with these tags does change color
    const scalingTab = document.getElementById('scalingtab');
    scalingTab.className = "w-screen h-screen flex flex-col justify-start text-error-red pt-20";
    const clusterTab = document.getElementById('clustertab');
    clusterTab.className = 'w-screen h-screen flex flex-col items-center justify-evenly text-error-red';

        //inverting username in nav bar
        const navUser = document.getElementById('navUser')
        navUser.className = 'text-prussian-blue text-xl font-semi px-2 py-1'
    
}
       


//INVERTS NAVBAR
    //invert the navLogo image
    const navLogo = document.getElementById('navbarlogo')
    navLogo.src = '../../../assets/SkaleSafe-dark.png'
    
    //invert the logo text
    const logoText = document.getElementById('colortestlogo');
    logoText.className = 'text-prussian-blue text-3xl pl-3'
    
    //invert the logo bg
    const logoBackground = document.getElementById('backgroundoflogo')
    logoBackground.className= "flex flex-row justify-evenly items-center bg-primary-color w-60 h-12 rounded-full"

    //inverting navbar text attempt
        //using classname to no longer need a unique id for each navbar option
    const navOptions = [...document.getElementsByClassName('text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]')]
    for (let i = 0; i < navOptions.length; i++){
        navOptions[i].className = 'text-prussian-blue text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]'
    }








// INVERTS HOME
if (window.location.pathname === '/home'){
    //inverts aboutsection 
        //inverts bulletpoint images
        //need to make code shorter and dynamic; need to make about page dynamic again as well
    const aboutPoints1 = document.getElementById('aboutbullets1')
    const aboutPoints2 = document.getElementById('aboutbullets2')
    const aboutPoints3 = document.getElementById('aboutbullets3')
    aboutPoints1.src = '../../../assets/skaleSafe-dark.png'
    aboutPoints2.src = '../../../assets/skaleSafe-dark.png'
    aboutPoints3.src = '../../../assets/skaleSafe-dark.png'
  
        //inverts About text
    const aboutText = document.getElementById('aboutText')
    const bulletText1 = document.getElementById('bullet1')
    const bulletText2 = document.getElementById('bullet2')
    const bulletText3 = document.getElementById('bullet3')
    aboutText.className = "text-3xl text-prussian-blue font-bold uppercase tracking-wider border-b-4";
    bulletText1.className ="text-xl text-prussian-blue px-4";
    bulletText2.className ="text-xl text-prussian-blue px-4";
    bulletText3.className ="text-xl text-prussian-blue px-4";

    //inverts home page 1st section image
    let homeLogo = document.getElementById('homeLogo')
    console.log(homeLogo.src)

    if (homeLogo.getAttribute('src') == '../../../assets/SkaleSafe-color.svg'){
    homeLogo.src = '../../../assets/SkaleSafe.svg'
    }
    // homeLogo.setAttribute('src', '../../../assets/SkaleSafe.svg')  
    else if (homeLogo.getAttribute('src') === '../../../assets/SkaleSafe.svg'){
    homeLogo.setAttribute('src', '../../../assets/SkaleSafe-color.svg')  
    }
    

    //inverting home page 1st section
        //adding ? to the const name removes red underlining, adding it removes the ability to use properties, giving an error
    const homeh1 = document.getElementById('eleh1')
    const homeSpan = document.getElementById('elespan')
    homeh1.className ='text-6xl text-black leading-relaxed tracking-wide m-0 p-0'
    homeSpan.className ='text-prussian-blue underline underline-offset-4 capitalize'
  
  
    //invert rest of homepage sections
    const demoText = document.getElementById('demoText')
    demoText.className = "text-3xl text-prussian-blue font-bold uppercase tracking-wider border-b-4"
  
    const docText = document.getElementById('documentationText')
    docText.className = "text-3xl text-prussian-blue font-bold uppercase tracking-wider border-b-4"
  
    const teamText = document.getElementById('teamText')
    teamText.className = "text-4xl text-prussian-blue font-bold uppercase tracking-wider border-b-4"
}

}  


export default LightOrDark;