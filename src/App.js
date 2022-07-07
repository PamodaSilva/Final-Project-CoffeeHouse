import './App.css';
import Navbar from './root/frontend/Home/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
