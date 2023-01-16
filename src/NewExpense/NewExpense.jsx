import React from "react";
import "./NewExpense.css";
export const NewExpense = ({ todo }) => {
  todo.sort((a, b) => {
    return b.number - a.number;
  });
//   console.log(todo);
  return (
    <div className="continerList">
      {todo.map((element) => {
        return (
          <ul className="list">
            <li className="list_item" key={element.id}>
              {element.title}
              <span>({element.number} years old)</span>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
