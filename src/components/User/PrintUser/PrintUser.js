import React from "react";
import Block from "../../UI/Block/Block";
import "./PrintUser.css";

const PrintUser = (props) => {
  return (
    <Block>
      <div className="print-user">
        <p>{ props.name } ({ props.age } years old)</p>
      </div>
    </Block>
  )
}

export default PrintUser;
