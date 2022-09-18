
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile/Profile';
const handleName=(FullName)=>{
  alert(`Hi,I'm ${FullName}`)
}
function App() {
  return (
    <div className='Parent'>
      <Profile FullName='Mohamed Amine Ben Hmida' Bio ='I ❤️ programming. I’ve been doing this for a decade as a full stack developer and as a backend engineer. My dream job is at a startup company where I can work on the background, API-driven apps or service-oriented architecture with Node.' Profession ='Software Engineer'></Profile>
      
handleName={handleName()}
<image/>


    </div>


  );

}


export default App;

