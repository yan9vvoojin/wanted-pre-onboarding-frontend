import { useEffect, useState } from "react";
import styled from "styled-components";

import AddTodo from "../components/todo/AddTodo";
import Item from "../components/todo/Item";
import useAccessTokenCheck from "../hook/useAccessTokenCheck";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 20rem;
`;

const Todos = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid red;
  width: 100%;
  padding: 1rem;
`;

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useAccessTokenCheck();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const url = `https://www.pre-onboarding-selection-task.shop/todos`;
    const options = {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("access_token") },
    };
    const response = await fetch(url, options);
    if (response.status === 200) {
      const todos = await response.json();
      setTodos([...todos]);
    }
  };

  return (
    <Wrapper>
      <AddTodo setTodos={setTodos} />
      <Todos>
        {todos.map((todo) => (
          <Item key={todo.id} {...todo} setTodos={setTodos} />
        ))}
      </Todos>
    </Wrapper>
  );
};

export default Todo;
