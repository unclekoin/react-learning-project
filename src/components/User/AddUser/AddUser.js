import React, { useState } from "react";
import Block from "../../UI/Block/Block";
import Button from "../../UI/Button/Button";
import "./AddUser.css";

const AddUser = ( props ) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const getUserDataHandler = (e) => {
    e.preventDefault();
    props.onUserData(userName, userAge)
    setUserName('');
    setUserAge('');
  }

  const getUserNameHandler = (e) => {
    setUserName(e.target.value);
  }

  const getUserAgeHandler = (e) => {
    setUserAge(e.target.value);
  }

  return (
    <Block>
      <form onSubmit={ getUserDataHandler } className="add-user-form">
        <label>Username</label>
        <input onChange={ getUserNameHandler } value={ userName } type="text"/>
        <label>Age (Years)</label>
        <input onChange={ getUserAgeHandler } value={ userAge } type="text"/>
        <Button />
      </form>
    </Block>
  )
}

export default AddUser;
