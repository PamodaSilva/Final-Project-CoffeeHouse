import './App.css';
import Navbar from './root/frontend/components/Navbar';
import Home from './root/frontend/Home/Home';
import Menu from './root/frontend/Menu/Menu';
import AboutUs from './root/frontend/AboutUs/AboutUs';
import Booking from './root/frontend/Booking/Booking';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>     
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Booking' element={<Booking/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
