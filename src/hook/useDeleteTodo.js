import { TODO_API_URL } from "../constants/api";
import useGetTodos from "./useGetTodos";

const useDeleteTodo = () => {
  const [todoList, setTodoList, getTodos] = useGetTodos();

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${TODO_API_URL}/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + localStorage.getItem("access_token") },
      });
      if (response.status === 204) {
        getTodos();
      } else {
        const { message } = await response.json();
        throw new Error(`할일 삭제 실패 (${message})`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return deleteTodo;
};

export default useDeleteTodo;
