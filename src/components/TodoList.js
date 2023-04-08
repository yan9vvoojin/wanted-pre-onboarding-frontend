import { useEffect } from "react";
import useGetTodos from "../hook/useGetTodos";

import StyledTodoList from "../styles/TodoList";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todoList, setTodoList, getTodos] = useGetTodos();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <TodoInput setTodoList={setTodoList} />
      <StyledTodoList>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} setTodoList={setTodoList} />
        ))}
      </StyledTodoList>
    </>
  );
};

export default TodoList;
