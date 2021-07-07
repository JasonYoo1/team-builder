import React, {useState} from 'react';
import {TeamForm} from './Form'
import './App.css';
import {UserCard} from './UserCard'




function App() {
  const[workersArray, setworkersArray] =useState([]);

  return (
    <div className="App">
        <TeamForm/>
        {/* <UserCard/> */}
    </div>
  );
}

export default App;
