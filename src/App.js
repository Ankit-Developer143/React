
import './App.css';

import Home from './components/Home';
import { About } from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Shop from './components/shop';


function App() {
  return (
    <Router>
      <Route path=""  component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" exact component={Shop}/>
    </Router>
   

  );
}

export default App;
