import { useState } from "react";
import createTodo from "../utils/createTodo";

import Input from "../styles/Input";
import TodoButton from "../styles/TodoButton";
import TodoInputField from "../styles/TodoInputField";

const TodoInput = ({ setTodoList }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddButtonClick = () => {
    const trimmedInput = input.trim();
    if (trimmedInput === "") return;
    createTodo(trimmedInput, setTodoList);
    setInput("");
  };

  return (
    <TodoInputField>
      <Input data-testid="new-todo-input" value={input} onChange={handleInputChange} placeholder="할일을 입력하세요" />
      <TodoButton data-testid="new-todo-add-button" onClick={handleAddButtonClick}>
        추가
      </TodoButton>
    </TodoInputField>
  );
};

export default TodoInput;
