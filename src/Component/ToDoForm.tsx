import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

export const TodoForm: React.FC<{
  onTitleChange: (title: string) => void;
  onDescriptionChange: (description: string) => void;
  onAdd: (title: string, description: string) => void;
}> = ({ onTitleChange, onDescriptionChange, onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (title.trim() !== "" && description.trim() !== "") {
      onAdd(title, description);
      setTitle("");
      setDescription("");
    } else {
      alert("Please enter both title and description.");
    }
  };

  return (
    <Form>
      <FormGroup className="mb-3">
        <FormLabel htmlFor="new-todo-title" className="fs-6 fw-normal lh-1.15">
          Title
        </FormLabel>

        <FormControl
          type="text"
          className="rounded-0 border-1 border-dark"
          id="new-todo-title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            onTitleChange(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel
          htmlFor="new-todo-description"
          className="fs-6 fw-normal lh-1.15"
        >
          Description
        </FormLabel>
        <FormControl
          type="text"
          className="rounded-0 border-1 border-dark"
          id="new-todo-description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            onDescriptionChange(e.target.value);
          }}
        />
      </FormGroup>
      <Button type="button" onClick={handleAdd}>
        Add to list
      </Button>
    </Form>
  );
};
