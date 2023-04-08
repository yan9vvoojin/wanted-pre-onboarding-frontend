import { TODO_API_URL } from "../constants/api";

const useCreateTodo = () => {
  const createTodo = async (newTodo, setTodoList) => {
    try {
      const response = await fetch(TODO_API_URL, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todo: newTodo }),
      });
      if (response.status === 201) {
        const createdTodo = await response.json();
        setTodoList((prev) => [...prev, createdTodo]);
      } else {
        const { message } = await response.json();
        throw new Error(`할일 추가 실패 (${message})`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return createTodo;
};

export default useCreateTodo;
