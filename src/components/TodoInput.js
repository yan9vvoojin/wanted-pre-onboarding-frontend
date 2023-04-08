import { useState } from "react";
import styled from "styled-components";
import createTodo from "../utils/createTodo";

import Button from "../styles/Button";
import Input from "../styles/Input";

const TodoInputField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 20%;
`;

const TodoInput = ({ setTodoList }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddButtonClick = () => {
    createTodo(input, setTodoList);
    setInput("");
  };

  return (
    <TodoInputField>
      <Input data-testid="new-todo-input" value={input} onChange={handleInputChange} />
      <StyledButton data-testid="new-todo-add-button" onClick={handleAddButtonClick}>
        추가
      </StyledButton>
    </TodoInputField>
  );
};

export default TodoInput;
