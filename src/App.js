import './App.css';
import Navbar from './root/frontend/components/Navbar';
import Home from './root/frontend/Home/Home';
import Menu from './root/frontend/Menu/Menu';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>     
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Menu' element={<Menu/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
