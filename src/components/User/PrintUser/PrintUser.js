import React from "react";
import Block from "../../UI/Block/Block";
import "./PrintUser.css";

const PrintUser = (props) => {
  let userList;
  if (props.userData) {
    userList = props.userData.map((user) => (
        <div className="print-user" key={ user.id }>
          { user.name } ({ user.age } years old)
        </div>
    ))
  }
  return props.userData.length ? <Block >{ userList }</Block> : null
}

export default PrintUser;
