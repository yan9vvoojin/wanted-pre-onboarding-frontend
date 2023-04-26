import TodoList from "../components/TodoList";
import useAccessTokenCheck from "../hooks/useAccessTokenCheck";
import TodoPage from "../styles/TodoPage";

const Todo = () => {
  useAccessTokenCheck();

  return (
    <TodoPage>
      <TodoList />
    </TodoPage>
  );
};

export default Todo;
