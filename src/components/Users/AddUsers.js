import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUsers.module.css';
import Button from '../UI/Button';

function AddUsers(props) {
  const [enterUsername, setEnterUsername] = useState('');
  const [enterAge, setEnterAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
      return;
    }
    if (+enterAge < 1) {
      return;
    }
    // console.log(enterUsername, enterAge);
    props.onAddUser(enterUsername, enterAge);
    setEnterUsername('');
    setEnterAge('');
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
        <input
          id='username'
          type='text'
          value={enterUsername}
          onChange={userNameChanngeHandler}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          value={enterAge}
          onChange={ageChanngeHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUsers;
