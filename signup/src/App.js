import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__Aside" >
      </div>
      
      <div className="App__Form" >
      
        <div className="PageSwitcher" >
          <a href="#" className="PageSwitcher__Item" > Sign In </a>
          <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active " > Sign Up </a>
        </div>

        <div className="FormTitle" >
          <a href="#" className="FormTitle__Link" > Sign In </a> or
          <a href="#" className="FormTitle__Link FormTitle_Link--Active" > Sign Up </a>
        </div>

      </div>
    </div>
  );
}

export default App;
