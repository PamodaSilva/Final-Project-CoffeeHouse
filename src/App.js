import './App.css';
import Navbar from './root/frontend/components/Navbar';
import Home from './root/frontend/Home/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>     
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
