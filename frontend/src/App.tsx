import React from 'react';
import './App.css';
import { MainRoutes } from './Routes/MainRoutes';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
