import './App.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Mycart from './Pages/Mycart';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Componets/Navbar/Navbar';
import Myticket from './Pages/Myticket';
import Userprofile from './Pages/Userprofile';





function App() {
 
  return (
   
<>
    <Router>
      <Navbar/>
           
      <Routes>
      

        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/mycart" element={<Mycart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Myticket" element={<Myticket />} />
        <Route exact path="/Userprofile" element={<Userprofile/>} />
      </Routes>
    </Router>
   
</>
    
  );
}

export default App;
