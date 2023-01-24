export function ContactUs(){
    return (
<>
  <div>
    <div className='LEFTSIDE'>

      <div className='Dev1'>
        {/* image does not need to be static; can reference our profile pics in linked in for example */}
        <img className="w-10 max-h-sm" src='../../../assets/SkaleSafe.png' alt="A fish inside a shield"/> 
       
        <p>LinkedIn: LinkedIn Icon that redirects to dev Linkined</p>
        <br/>
        <p>Github: GitHub icon that redirects to dev Github </p>
      </div>
      
      <br/>

      <div className='display:inline-block'>
        <img className="w-10 max-h-sm" src='../../../assets/SkaleSafe-nobg.png' alt="A fish inside a shield"/>   
     
        <p className='justify-content-right'>LinkedIn:</p>
        <br/>
        <p>Github: </p>
      </div>

      <br/>
      
      <div className='Dev3'>
        <img className="w-10 max-h-sm" src='../../../assets/SkaleSafe-nobg.png' alt="A fish inside a shield"/> 
        <p>LinkedIn:</p>
        <br/>
        <p>Github: </p>
      </div>

      <br/>
      
      <div className='Dev4'>
        <img className="w-10 max-h-sm" src='../../../assets/SkaleSafe-nobg.png' alt="A fish inside a shield"/> 
        <p>LinkedIn:</p>
        <br/>
        <p>Github: </p>
      </div>
      
      <br/>
      
      <div className='Dev5'>
        <img className="w-10 max-h-sm" src='../../../assets/SkaleSafe-nobg.png' alt="A fish inside a shield"/> 
        <p>LinkedIn:</p>
        <br/>
        <p>Github: </p>
      </div>
    </div >

<br/>

<br/>

<br/>

<br/>
    <div className='RIGHTSIDE'>
        
      <p>Bethany Mattern Cable</p>
      <p>BMC Bio</p>

      <br/>
      <p>Leonardo Brian Campos</p>
      <p>LBC Bio; Example: Codesmith Alumni</p>

      <br/>
      <p>Daniel Doody</p>
      <p>DD Bio</p>

      <br/>
      <p>Sang Rea Han</p>
      <p>SRH Bio</p>

      <br/>
      <p>Kelvin Shamy</p>
      <p>KS Bio</p>

    </div>

  </div>
</>)
}