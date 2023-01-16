import { useState } from "react";
import "./App.css";
import { Expense } from "./ExpenseForm/Expense";
import { NewExpense } from "./NewExpense/NewExpense";

function App() {
  const [todo, setTodo] = useState([])
  // console.log(todo);
  const addTodos = (name, age) => {
    setTodo([
      ...todo,
      { title: name, number: age, id: Math.random().toString },
    ]);
  };
  return (
    <div className="App">
      <Expense onTodos={addTodos} />
      <NewExpense todo={todo} />
    </div>
  );

}

export default App;
