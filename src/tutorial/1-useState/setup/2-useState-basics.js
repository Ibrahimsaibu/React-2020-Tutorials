import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler);
  const [text, setText] = useState("randle text");

  const handleClick = () => {
    if (text === "randle title") {
      setText("hello world");
    } else {
      setText("randle title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
