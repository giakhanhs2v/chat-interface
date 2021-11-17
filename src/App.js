import React from "react";
import reactDom from "react-dom";
import { BrowserRouter, Route, Link, Routes,Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
function App() {
 
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        
      </ul>

      <hr />
      </div> 
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
      
      
    
  </BrowserRouter>
  );
} 
export default App;
