import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './Components/About';
import Starter from './Components/Starter';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/About">
          <About></About>
        </Route>
        <Route path="/">
          <Starter></Starter>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
