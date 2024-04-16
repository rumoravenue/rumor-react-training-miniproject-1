import React, { useState } from "react";
import "./App.css";
import { Form, Button, ListGroup, Alert } from "react-bootstrap";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoDescription, setTodoDescription] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Counter for generating unique IDs
  const [idCounter, setIdCounter] = useState<number>(1);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoDescription(e.target.value);
  };

  const handleTodoCheck = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoTitle || !todoDescription) {
      setError("Please fill out both title and description");
      return;
    }
    const newTodo: Todo = {
      id: idCounter,
      title: todoTitle,
      description: todoDescription,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoTitle("");
    setTodoDescription("");
    setError("");
    // Increment the counter for the next todo
    setIdCounter(idCounter + 1);
  };

  return (
    <div className="container m-4">
      <h1 className="border-2 border-danger fw-normal   ">SIMPLE TO-DO LIST</h1>
      <ListGroup className="w-50 h-auto">
        {todos.map((todo, index) => (
          <ListGroup.Item
            key={todo.id}
            className={`border-1 rounded-0  ${
              index % 2 === 0 ? "custom-bg-1" : "custom-bg-2"
            }`}
          >
            <Form.Check
              className="fs-6 "
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleTodoCheck(todo.id)}
              label={
                <span
                  className="fs-6 fw-bold m-0"
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  #{index + 1}: {todo.title} #{index + 1}
                </span>
              }
            />
            <p className="fw-semibold  ">{todo.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form onSubmit={handleSubmit} className="mt-4 ">
        <Form.Group controlId="formTodoTitle">
          <Form.Label className="fw-medium">Title</Form.Label>
          <Form.Control
            className="w-25  rounded-1 custom-input-boderColor"
            type="text"
            value={todoTitle}
            onChange={handleTitleChange}
          />
        </Form.Group>
        <Form.Group controlId="formTodoDescription">
          <Form.Label className="fw-medium">Description</Form.Label>
          <Form.Control
            className="w-25 rounded-1 custom-input-boderColor"
            type="text"
            value={todoDescription}
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button
          className="mt-3 border-2 button-color"
          variant="primary"
          type="submit"
        >
          Add to list
        </Button>
      </Form>
    </div>
  );
};

export default App;
