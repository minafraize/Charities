import React from 'react';
import { Route } from 'react-router-dom'

import Charities from './charities/charities'
import './App.scss';


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Charities} />
    </div>
  );
}

export default App;
