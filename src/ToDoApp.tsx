import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { todoData, TodoItem } from "./ToDo-Data";
import { TodoForm } from "./Component/ToDoForm";
import { TodoList } from "./Component/ToDoList";

export const TodoApp: React.FC = () => {
  const [data, setData] = useState<TodoItem[]>(todoData);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCheckboxChange = (id: number) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setData(updatedData);
  };

  const addTodo = () => {
    if (title.trim() !== "" && description.trim() !== "") {
      const newTodo: TodoItem = {
        id: data.length + 1,
        title: title,
        description: description,
        completed: false,
      };
      setData([...data, newTodo]);
    } else {
      alert("Please enter both title and description.");
    }
  };

  return (
    <div className="container">
      <div className="card-body">
        <h1
          className="card-title custom-title text-start mb-4 fw-normal display-1"
          style={{ fontSize: "48px", fontWeight: 400 }}
        >
          Simple TO-DO List
        </h1>
        <TodoList data={data} handleCheckboxChange={handleCheckboxChange} />
      </div>
      <TodoForm
        onTitleChange={setTitle}
        onDescriptionChange={setDescription}
        onAdd={addTodo}
      />
    </div>
  );
};


