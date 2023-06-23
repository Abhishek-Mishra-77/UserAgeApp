import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';
import './App.css';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };


  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
