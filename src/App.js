import ResponsiveAppBar from './components/ResponsiveAppBar'
import { DashBoard } from './containers/Dashboard';
import React from 'react';
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <DashBoard />


    </div>
  );
}

export default App;
