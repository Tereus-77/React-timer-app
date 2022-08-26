import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NaviGate from './components/NaviGate';
import Product from './components/Product';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'  




function App() {
  setTimeout(function() {
    window.location.reload(false);
  }, 120000);
  return (

 <Router>
    <div className='App'>
      <NaviGate />
      <div className='content'>
    <Switch>
    <Route exact path="/">
      <Home /> 
    </Route>
    <Route path="/Product">
      <Product /> 
    </Route>
    <Route path="/About">
      <About /> 
    </Route>
    <Route path="/Contact">
      <Contact /> 
    </Route>
    </Switch>
      </div>
    </div>

 </Router>
  );
}

export default App;
