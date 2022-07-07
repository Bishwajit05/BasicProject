import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUsers.module.css';
import Button from '../UI/Button';

function AddUsers(props) {
  const [enterUsername, setEnterUsername] = useState('');
  const [enterAge, setEnterAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enterUsername, enterAge);
  };

  const userNameChanngeHandler = (event) => {
    setEnterUsername(event.target.value);
  };
  const ageChanngeHandler = (event) => {
    setEnterAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' onChange={userNameChanngeHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' onChange={ageChanngeHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUsers;
