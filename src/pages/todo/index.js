import useCheckAccessToken from "../../components/hook/useCheckAccessToken";

const Todo = () => {
  useCheckAccessToken();

  return <div>Todo Page</div>;
};

export default Todo;
