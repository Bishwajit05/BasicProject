import React, { useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={[]} />
    </div>
  );
}

export default App;
