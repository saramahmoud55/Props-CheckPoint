import './App.css';
import shafik from'./Shafik.jpg'
import Profile from './Profile/profile';

function App() {
  const styleObject ={fontFamily:"GoldmanBold" ,textAlign:"center",margin:"30px",color:"#000C66"}
  return (
    <div style={styleObject}>
    <Profile fullName="Sara Mahmoud" 
    bio="I'm a software engineer"
     profession="Frontend engineer"
      src={shafik}/>
    </div>
  );
}

export default App;
