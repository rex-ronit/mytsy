import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';

const DenimsPage = () => (
  <div>
    <h1>Denims Page</h1>
  </div>
);

function App() { 
   return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/denims' component={DenimsPage} />
      </Switch>
    </div>
  );
}

export default App;
