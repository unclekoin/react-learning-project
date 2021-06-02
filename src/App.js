import React, { useState } from "react";
import AddUser from "./components/User/AddUser/AddUser";
import PrintUser from "./components/User/PrintUser/PrintUser";
import "./App.css";

const App = () => {

  const [userData, setUserData] = useState([])

  const updateUserData = (name, age) => {
    setUserData(prevData => {
      const newUserData = [...prevData];
      newUserData.unshift({name, age});
      return newUserData;
    })
  }

  return (
    <div className="app">
      <AddUser onUserData={ updateUserData } />
      <PrintUser userData={ userData } />
    </div>
  )
}

export default App;
