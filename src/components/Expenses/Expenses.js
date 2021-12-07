import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card.js";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterDate, setFilteredDate] = useState("2020");
  // const [filteredItems, setFilteredItems] = useState(props.items);

  const filteredItems = props.items.filter((items) => {
    return items.date.getFullYear().toString() === filterDate;
  });

  const filteredDateHandler = (filteredDate) => {
    setFilteredDate(filteredDate);
    console.log(filterDate);

    // console.log(
    //   props.items.filter(
    //     (items) => items.date.getFullYear().toString() === filteredDate
    //   )
    // );

    //   setFilteredItems(
    //     props.items.filter(
    //       (items) => items.date.getFullYear().toString() === filteredDate
    //     )
    //   );
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterDate}
        onSelectFilterDate={filteredDateHandler}
      />
      <ExpensesList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
