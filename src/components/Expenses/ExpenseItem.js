import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js";

import "./ExpenseItem.css";

//TODO: #4 @mysticrecords this is a test issue
const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // setTimeout(() => {setTitle('Updated!')}, 2000);
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">£{props.amount}</div>
      <button onClick={clickHandler}>Change button</button>
    </Card>
  );
};

export { ExpenseItem };
