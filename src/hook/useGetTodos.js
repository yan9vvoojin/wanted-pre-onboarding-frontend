import { useEffect, useState } from "react";

import { TODO_API_URL } from "../constants/api";

const useGetTodos = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const response = await fetch(TODO_API_URL, {
        method: "GET",
        headers: { Authorization: "Bearer " + localStorage.getItem("access_token") },
      });
      if (response.status === 200) {
        const todos = await response.json();
        setTodoList([...todos]);
      } else {
        const { message } = await response.json();
        throw new Error(`할일 가져오기 실패 (${message})`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return [todoList, setTodoList, getTodos];
};

export default useGetTodos;
