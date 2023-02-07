//ts possible


const LightOrDark = () => { 
//not DRY
    //polish ids/classnames 
//can contain inversions that should occur across both pages
let element = document.body
element.classList.toggle('light-mode')




//INVERTS NAVBAR
    //invert the Logo image - DONE
    const navLogo = document.getElementById('navbarlogo')
        if (navLogo.getAttribute('src') === '../../../assets/skaleSafe-light.png'){
            navLogo.src = '../../../assets/SkaleSafe-dark.png'
        }
        else if (navLogo.getAttribute('src') === '../../../assets/SkaleSafe-dark.png' ){
            navLogo.src = '../../../assets/skaleSafe-light.png'
        }   
    
    //invert the logo text - DONE
    const logoText = document.getElementById('colortestlogo');
        if (logoText.className === "text-primary-color text-3xl pl-3"){
            logoText.className = 'text-prussian-blue text-3xl pl-3'
        }
        else if (logoText.className === "text-prussian-blue text-3xl pl-3"){
            logoText.className = "text-primary-color text-3xl pl-3"
        }
    
    //invert the logo bg - DONE
    const logoBackground = document.getElementById('backgroundoflogo')
        if (logoBackground.className ===  "flex flex-row justify-evenly items-center bg-prussian-blue w-60 h-12 rounded-full"){
            logoBackground.className = "flex flex-row justify-evenly items-center bg-primary-color w-60 h-12 rounded-full"
        }
        else if (logoBackground.className ===  "flex flex-row justify-evenly items-center bg-primary-color w-60 h-12 rounded-full"){
            logoBackground.className = "flex flex-row justify-evenly items-center bg-prussian-blue w-60 h-12 rounded-full"
        }

    //inverting navbar text - DONE
    const navOptions = [...document.getElementsByClassName('text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]')]
    const navOptionsInverted = [...document.getElementsByClassName('text-prussian-blue text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]')]
        for (let i = 0; i < navOptions.length; i++){
            navOptions[i].className = 'text-prussian-blue text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]'
        }
        for (let i = 0; i < navOptionsInverted.length; i++){
            navOptionsInverted[i].className = 'text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]'
        }

    //inverts the navBar mode switch button image - DONE
    const modeButton = document.getElementById('modebutton')
        if (modeButton.getAttribute('src') === '../../../assets/skaleSafe-light.png'){
            modeButton.src = '../../../assets/skaleSafe-dark.png'
        }
        else if (modeButton.getAttribute('src') === '../../../assets/skaleSafe-dark.png'){
            modeButton.src = '../../../assets/skaleSafe-light.png'
        }

// INVERTS FOOTER
const footerText = document.getElementById('footertext')
const footerGH = document.getElementById('gitHubButton')
const footerBorder = document.getElementById('footerborder')
if (footerText.className === 'text-honeydew'){
 footerText.className = 'text-prussian-blue'
 footerBorder.className = 'border-t border-prussian-blue h-20 w-screen flex flex-row justify-between items-center px-20'
}
else {
    footerText.className = 'text-honeydew'
    footerBorder.className = 'border-t border-honeydew h-20 w-screen flex flex-row justify-between items-center px-20'
}
//restore inversion


//INVERTS DB PAGE
if (window.location.pathname === '/dashboard' || window.location.pathname === '/dashboard/profile'){
    //invert db section background and DB font
    const dbBg = document.getElementById('dashboardbg')
        if (dbBg.className === 'flex flex-col p-3 bg-honeydew shadow w-60'){
            dbBg.className = 'flex flex-col p-3 bg-prussian-blue shadow w-60'
        }
        else if (dbBg.className === 'flex flex-col p-3 bg-prussian-blue shadow w-60'){
            dbBg.className = 'flex flex-col p-3 bg-honeydew shadow w-60'
        }

    const dbText = document.getElementById('dbText')
        if (dbText.className === 'text-xl text-honeydew pl-4 font-bold'){
            dbText.className = 'text-xl text-prussian-blue pl-4 font-bold'
        } 
        else if (dbText.className === 'text-xl text-prussian-blue pl-4 font-bold'){
            dbText.className = 'text-xl text-honeydew pl-4 font-bold'
        }

   //inverts DB options
    const scalingOption = document.getElementById('scalingoption')
        if (scalingOption.className === 'text-honeydew'){
            scalingOption.className = 'text-prussian-blue'
        }
        else if (scalingOption.className === 'text-prussian-blue'){
            scalingOption.className = 'text-honeydew'
        }
   
    const alertsOption = document.getElementById('alertsoption')
        if (alertsOption.className === 'text-honeydew'){
            alertsOption.className = 'text-prussian-blue'
        }
        else if (alertsOption.className === 'text-prussian-blue'){
            alertsOption.className = 'text-honeydew'
        }

    const clusterOption = document.getElementById('clusteroption')
        if (clusterOption.className === 'text-honeydew'){
            clusterOption.className = 'text-prussian-blue'
        }
        else if (clusterOption.className === 'text-prussian-blue'){
            clusterOption.className = 'text-honeydew'
        }

    const kubeOption = document.getElementById('kubeoption')
        if (kubeOption.className === 'text-honeydew'){
           kubeOption.className = 'text-prussian-blue'
        }
        else if (kubeOption.className === 'text-prussian-blue'){
            kubeOption.className = 'text-honeydew'
        }


    const settingsOption = document.getElementById('settingsoption')
        if (settingsOption.className === 'text-honeydew'){
            settingsOption.className = 'text-prussian-blue'
        }
        else if (settingsOption.className === 'text-prussian-blue'){
            settingsOption.className = 'text-honeydew'
        }
    
    const logoutOption = document.getElementById('logoutoption')
        if (logoutOption.className === 'text-honeydew'){
            logoutOption.className = 'text-prussian-blue'
        }
        else if (logoutOption.className === 'text-prussian-blue'){
            logoutOption.className = 'text-honeydew'
        }

    //inverts alterstab colors
    const alertsStatus = [...document.getElementsByClassName('mr-3')]
    for (let i = 0; i <alertsStatus.length; i++){
    alertsStatus[i].className = 'mr-3 text-prussian-blue'};


    //inverts individual tabs - scaling metrics, cluster info
        //not working; hardcoding these elements with these tags does change color
            // const scalingTab = document.getElementById('scalingtab');
            // scalingTab.className = "w-screen h-screen flex flex-col justify-start text-error-red pt-20";
            // const clusterTab = document.getElementById('clustertab');
            // clusterTab.className = 'w-screen h-screen flex flex-col items-center justify-evenly text-error-red';



    //inverting username in dB nav bar - DONE
    const navUser = document.getElementById('navUser')
        if (navUser.className === 'text-honeydew text-xl font-semi px-2 py-1'){
            navUser.className = 'text-prussian-blue text-xl font-semi px-2 py-1'
        }
        else if (navUser.className === 'text-prussian-blue text-xl font-semi px-2 py-1'){
            navUser.className = 'text-honeydew text-xl font-semi px-2 py-1'
        }

    //inverts profile page text, bg & borders, profile photo border 
    const profileText = document.getElementById('profileText')
        if (profileText.className === "w-96 h-screen flex-col justify-start text-teal-blue pt-32"){
            profileText.className = "w-96 h-screen flex-col justify-start text-honeydew pt-32"
        }
        else if (profileText.className === "w-96 h-screen flex-col justify-start text-honeydew pt-32"){
            profileText.className = "w-96 h-screen flex-col justify-start text-teal-blue pt-32"
        }
    

    const profileBG = document.getElementById('profileBG')
        if (profileBG.className === "bg-off-white relative shadow rounded-lg "){
            profileBG.className = "bg-prussian-blue relative shadow rounded-lg "
        }
        else {profileBG.className = "bg-off-white relative shadow rounded-lg "}

    const profileBorder = document.getElementById('profileBorder')
        if (profileBorder.className === "rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white"){
            profileBorder.className = "rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-prussian-blue"
        }
        else {profileBorder.className = "rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white"
        }

    }
    








// INVERTS HOME
if (window.location.pathname === '/home' || window.location.pathname === '/'){
    //inverts home page 1st section image - DONE
    let homeLogo = document.getElementById('homeLogo')
        if (homeLogo.getAttribute('src') === '../../../assets/SkaleSafe-color.svg'){
            homeLogo.src = '../../../assets/SkaleSafe.svg'
        }
        else if (homeLogo.getAttribute('src') === '../../../assets/SkaleSafe.svg'){
            homeLogo.setAttribute('src', '../../../assets/SkaleSafe-color.svg')  
        }
    

    //inverting home page 1st section
        //adding ? to the const name removes red underlining, adding it removes the ability to use properties, giving an error
    const homeh1 = document.getElementById('eleh1')
   
        if (homeh1.className ==='text-6xl text-prussian-blue leading-relaxed tracking-wide m-0 p-0'){
            homeh1.className ='text-6xl text-primary-color leading-relaxed tracking-wide m-0 p-0'
        }
        else {
            homeh1.className ='text-6xl text-prussian-blue leading-relaxed tracking-wide m-0 p-0'
        };
    const homeSpan = document.getElementById('elespan')
        if (homeSpan.className === 'text-primary-color underline underline-offset-4 capitalize'){
            homeSpan.className = 'text-prussian-blue underline underline-offset-4 capitalize'
        }
        else {
            homeSpan.className = 'text-primary-color underline underline-offset-4 capitalize'
        }
        

    //inverts aboutsection 
        //inverts bulletpoint images
        //need to make code shorter and dynamic; need to make about page dynamic again as well
    const aboutPoints1 = document.getElementById('aboutbullets1')
    const aboutPoints2 = document.getElementById('aboutbullets2')
    const aboutPoints3 = document.getElementById('aboutbullets3')
        if (aboutPoints1.getAttribute('src') === '../../../assets/skaleSafe-light.png'){
            aboutPoints1.src = '../../../assets/SkaleSafe-dark.png'
            aboutPoints2.src = '../../../assets/SkaleSafe-dark.png'
            aboutPoints3.src = '../../../assets/SkaleSafe-dark.png'
        }
        else {
            aboutPoints1.src = '../../../assets/skaleSafe-light.png'
            aboutPoints2.src = '../../../assets/skaleSafe-light.png'
            aboutPoints3.src = '../../../assets/skaleSafe-light.png'
        }
        

      
  
        //inverts About text
    const aboutText = document.getElementById('aboutText')
        if (aboutText.className === "text-3xl text-honeydew font-bold uppercase tracking-wider border-b-4"){
            aboutText.className = "text-3xl text-prussian-blue font-bold uppercase tracking-wider border-b-4";
        }
        else {
            aboutText.className = "text-3xl text-honeydew font-bold uppercase tracking-wider border-b-4";
        }
    const bulletText1 = document.getElementById('bullet1')
    const bulletText2 = document.getElementById('bullet2')
    const bulletText3 = document.getElementById('bullet3')
       
    if(bulletText1.className === 'text-xl text-honeydew px-4'){
        bulletText1.className ="text-xl text-prussian-blue px-4";
        bulletText2.className ="text-xl text-prussian-blue px-4";
        bulletText3.className ="text-xl text-prussian-blue px-4";
    }
    else{
        bulletText1.className = "text-xl text-honeydew px-4";
        bulletText2.className = "text-xl text-honeydew px-4";
        bulletText3.className = "text-xl text-honeydew px-4"
    }
  
  
    //invert demo,doc, team of homepage sections 
    const demoText = document.getElementById('demoText')
        if (demoText.className === "text-3xl text-prussian-blue font-bold uppercase tracking-wider border-b-4"){ 
            demoText.className = 'text-3xl text-honeydew font-bold uppercase tracking-wider border-b-4'
        }
        else if (demoText.className === 'text-3xl text-honeydew font-bold uppercase tracking-wider border-b-4'){
            demoText.className = "text-3xl text-prussian-blue font-bold uppercase tracking-wider border-b-4"
        }
    
    const docText = document.getElementById('documentationText')
        if (docText.className === "text-3xl text-prussian-blue font-bold uppercase tracking-wider border-b-4"){
            docText.className = "text-3xl text-honeydew font-bold uppercase tracking-wider border-b-4"
        }
        else if (docText.className === "text-3xl text-honeydew font-bold uppercase tracking-wider border-b-4"){
            docText.className = "text-3xl text-prussian-blue font-bold uppercase tracking-wider border-b-4"
        }

  
    const teamText = document.getElementById('teamText')
        if (teamText.className === "text-4xl text-honeydew font-bold uppercase tracking-wider border-b-4"){
            teamText.className = "text-4xl text-prussian-blue font-bold uppercase tracking-wider border-b-4"
        }   
        else if (teamText.className === "text-4xl text-prussian-blue font-bold uppercase tracking-wider border-b-4"){
            teamText.className = "text-4xl text-honeydew font-bold uppercase tracking-wider border-b-4"
        }

}

}


export default LightOrDark;