import React from "react";
import { TodoItem } from "../ToDo-Data";
import "../App.css"; 

interface TodoListProps {
  data: TodoItem[];
  handleCheckboxChange: (id: number) => void;
}

 export const TodoList: React.FC<TodoListProps> = ({ data, handleCheckboxChange }) => {
  return (
    <ul className="list-group">
      {data.map((item, index) => (
        <li
          key={item.id}
          className={`list-group-item align-items-center ${index % 3 === 0 ? "color-bg" : index % 3 === 1 ? "colors-bg" : ""}`}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              checked={item.completed}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label className="form-check-label">
              <span className={`title ${item.completed ? "completed" : ""}`}>
                #{item.id}: {item.title}#{item.id}
              </span>
              <br />
              <span className="description">{item.description}</span>
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};


