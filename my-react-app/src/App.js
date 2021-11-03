
import './App.css';

import Home from './components/Home';
import { About } from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Shop from './components/shop';
import UserServices from './components/Services/UserServices';
import Navigate from './components/Navigate';


function App() {
  return (
    <Router>
      <Route path="/home"  component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" exact component={Shop}/>
      <Route path="/us" exact component={UserServices}/>
      <Route path="/" exact component={Navigate}/>
    </Router>
   

  );
}

export default App;
