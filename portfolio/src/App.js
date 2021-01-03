import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './Components/About';
import Starter from './Components/Starter';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About></About>
        </Route>
        <Route exact path="/" exact>
          <Starter></Starter>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
