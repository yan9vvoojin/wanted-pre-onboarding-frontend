import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

const AddTodo = ({ setTodos }) => {
  const [input, setInput] = useState("");

  const addTodo = async () => {
    const url = `https://www.pre-onboarding-selection-task.shop/todos`;
    const options = {
      method: "POST",
      headers: { Authorization: "Bearer " + localStorage.getItem("access_token"), "Content-Type": "application/json" },
      body: JSON.stringify({ todo: input }),
    };
    const response = await fetch(url, options);
    if (response.status === 201) {
      const newTodo = await response.json();
      setTodos((prev) => [...prev, newTodo]);
      setInput("");
    }
  };
  return (
    <Wrapper>
      <Input data-testid="new-todo-input" value={input} onChange={(e) => setInput(e.target.value)} />
      <Button data-testid="new-todo-add-button" onClick={addTodo}>
        추가
      </Button>
    </Wrapper>
  );
};

export default AddTodo;
