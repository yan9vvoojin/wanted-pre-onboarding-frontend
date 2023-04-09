import useAccessTokenCheck from "../hook/useAccessTokenCheck";

import TodoList from "../components/TodoList";
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
