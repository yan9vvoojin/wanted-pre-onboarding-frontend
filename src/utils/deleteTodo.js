import { TODO_API_URL } from "../constants/api";

const deleteTodo = async (id, setTodoList) => {
  try {
    const response = await fetch(`${TODO_API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    if (response.status === 204) {
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    } else {
      const { message } = await response.json();
      throw new Error(`할일 삭제 실패 (${message})`);
    }
  } catch (error) {
    alert(error.message);
  }
};

export default deleteTodo;
