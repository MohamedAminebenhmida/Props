
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile/Profile';
import Image from './Profile/image.jpg'


function App() {
  const handleName=(FullName)=>{
    alert(`Hi,I'm ${FullName}`);
  }
const Parameters={ FullName:'Mohamed Amine Ben Hmida', Bio :'I ❤️ programming. I’ve been doing this for a decade as a full stack developer and as a backend engineer.My dream job is at a startup company where I can work on the background, API-driven apps or service-oriented architecture with Node.', Profession :'Software Engineer'}
  return (
  
    <div className='Parent'>
      <Profile parameters={Parameters} handleName={handleName}>
        <img id="first"src={Image} alt=""/>
        </Profile>
      
    </div>


  );

};
export default App;

