
import { useContext } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AuthContext } from './Context/AuthContext';
import { AllRoutes } from './Routes/AllRoutes';

function App() {

const {IsLoginPage}=useContext(AuthContext)

  return (
    <div className="App">
      {/* <DashNav/>
      <Dashboard/> */}
     
     {!IsLoginPage?<Navbar/>:null}
     <AllRoutes/>
  
    </div>
  );
}

export default App;
