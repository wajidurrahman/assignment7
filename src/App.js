import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
import User from './components/Users/Users';


function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect( () =>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  }, [])

const addMember = (name) => {   //step:1
    setTeam([...team, name]);
}


// const add = (x, y) => x + y;
// const addWrapper = () => add(3,5);
// const total = addWrapper;
// console.log(total);


  return (
    <div>
      <h1>Team Builder</h1>
      <ul>
        {
          team.map( (m, idx)=> <li key={idx}>{m}</li>)
        }
      </ul>
      {
        users.map(user => <User user={user} addMember={addMember}></User>)//step:2
      }
      
    </div>
  );
}

export default App;
