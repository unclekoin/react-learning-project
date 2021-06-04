import React, { useState } from "react";
import AddUser from "./components/User/AddUser/AddUser";
import PrintUser from "./components/User/PrintUser/PrintUser";
import ModalWindow from "./components/Modal/ModalWindow/ModalWindow";
import "./App.css";
import ModalOverlay from "./components/Modal/ModalOverlay/ModalOverlay";

const App = () => {

  const [userData, setUserData] = useState([])
  const [isValid, setIsValid] = useState(true)
  const [message, setMessage] = useState('')

  const updateUserData = (name, age) => {
    setUserData(prevData => {
      const newUserData = [...prevData];
      newUserData.unshift({name, age, id: "uid" + Math.random().toString().replace(/\./, '')});
      return newUserData;
    })
  }

  const modalWindowHandler = (msg = '' ) => {
    if (!msg) {
      setIsValid(true);
    } else {
      setMessage(msg)
      setIsValid(false);
    }
  }

  return (
    <div className={ isValid ? "app" : "app open"}>
      <ModalOverlay onModalWindowHandler={ modalWindowHandler } />
      <ModalWindow msg={ message } onModalWindowHandler={ modalWindowHandler } />
      <div className="app__wrapper">
        <AddUser onUserData={ updateUserData } onModalWindowHandler={ modalWindowHandler }/>
        <PrintUser userData={ userData } />
      </div>
    </div>
  )
}

export default App;
