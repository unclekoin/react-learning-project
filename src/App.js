import React, { useState } from "react";
import AddUser from "./components/User/AddUser/AddUser";
import PrintUser from "./components/User/PrintUser/PrintUser";
import ModalWindow from "./components/Modal/ModalWindow/ModalWindow";
import "./App.css";
import ModalOverlay from "./components/Modal/ModalOverlay/ModalOverlay";

const App = () => {

  const [userData, setUserData] = useState([])

  const updateUserData = (name, age) => {
    setUserData(prevData => {
      const newUserData = [...prevData];
      newUserData.unshift({name, age, id: "uid" + Math.random().toString().replace(/\./, '')});
      return newUserData;
    })


  }

  return (
    <div className="app">
      <ModalOverlay />
      <ModalWindow />
      <div className="app__wrapper">
        <AddUser onUserData={ updateUserData } />
        <PrintUser userData={ userData } />
      </div>
    </div>
  )
}

export default App;
