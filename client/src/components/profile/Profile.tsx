type Props = {};

const Profile = (props: Props) => {

  function toggleLight(){
    let element = document.body
    element.classList.toggle('light-mode')
  }
  return (

    <div className="w-screen h-screen flex flex-col justify-start text-honeydew pt-20"> 
      <h1 className="self-center text-4xl font-bold uppercase tracking-wider">Scaling Metrics</h1>

    </div>
  )
}

export default Profile;
