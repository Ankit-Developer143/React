import React from 'react';
// import { useHistory } from "react-router-dom";
import { Route, Link, BrowserRouter } from 'react-router-dom'
import { About } from './About';
import Home from './Home';
import Shop from './shop';

function Navigate() {
    // const history = useHistory();

  function handleClick() {
    // history.push("/home");
  }
    return (
        // <div>
        //     <h1>Navigate works</h1>
        //     <button type="button" onClick={handleClick}>
        //         Go home
        //     </button>
        // </div>
        < BrowserRouter >
      <div>
         <ul>
            <li>
               <Link to="/home">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
            <li>
               <Link to="/shop">shop</Link>
            </li>
         </ul>
         <Route exact path="/home" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/shop" component={Shop} />
      </div>
   </ BrowserRouter >
    )
}

export default Navigate
