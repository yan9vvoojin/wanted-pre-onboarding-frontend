import { useEffect, useState } from "react";
import styled from "styled-components";

import useCheckAccessToken from "../../components/hook/useCheckAccessToken";
import Item from "../../components/todo/Item";

const Todos = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid red;
  max-width: 20rem;
  padding: 1rem;
`;

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useCheckAccessToken();

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
    <div>
      <Todos>
        {todos.map((todo) => (
          <Item key={todo.id} {...todo} />
        ))}
      </Todos>
    </div>
  );
};

export default Todo;
