import { useState } from "react";
import styled from "styled-components";
import useCreateTodo from "../hook/useCreateTodo";

const Wrapper = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

const TodoInput = ({ setTodoList }) => {
  const createTodo = useCreateTodo();
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddButtonClick = () => {
    createTodo(input, setTodoList);
  };

  return (
    <Wrapper>
      <Input data-testid="new-todo-input" value={input} onChange={handleInputChange} />
      <Button data-testid="new-todo-add-button" onClick={handleAddButtonClick}>
        추가
      </Button>
    </Wrapper>
  );
};

export default TodoInput;
