import './App.css';
import Navbar from './root/frontend/components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
      </Router>     
    </>
    // <Switch>
    // <Route path='/' exact/>
    // </Switch>
  );
}

export default App;
