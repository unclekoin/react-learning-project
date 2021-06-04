import React, { useState } from "react";
import Block from "../../UI/Block/Block";
import Button from "../../UI/Button/Button";
import "./AddUser.css";

const AddUser = ( props ) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const getUserDataHandler = (e) => {
    e.preventDefault();

    if (!userName.trim() || !userAge.trim()) {
      props.onModalWindowHandler('Empty data!');
      setUserAge('');
    } else if (isNaN(+userAge)) {
      props.onModalWindowHandler('Age must be a number!');
      setUserAge('');
    } else if( +userAge < 0 || +userAge > 100) {
      props.onModalWindowHandler('Age must be a positive number or less 100!');
      setUserAge('');
    } else {
      props.onUserData(userName, userAge)
      props.onModalWindowHandler()
      setUserName('');
      setUserAge('');
    }
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
