import useGetTodoList from "../hook/useGetTodoList";

import StyledTodoList from "../styles/TodoList";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todoList, setTodoList] = useGetTodoList();

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
