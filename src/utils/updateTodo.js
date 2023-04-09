import { TODO_API_URL } from "../constants/api";

const updateTodo = async ({ id, todo, isCompleted }, setTodoList) => {
  try {
    const response = await fetch(`${TODO_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo, isCompleted }),
    });
    if (response.status === 200) {
      const newTodo = await response.json();
      setTodoList((prev) => prev.map((todo) => (todo.id === newTodo.id ? newTodo : todo)));
    } else {
      const { message } = await response.json();
      throw new Error(`할일 수정 실패 (${message})`);
    }
  } catch (error) {
    alert(error.message);
  }
};

export default updateTodo;
