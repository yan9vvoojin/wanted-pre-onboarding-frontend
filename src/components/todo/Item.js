import styled from "styled-components";
import DeleteButton from "./DeleteButton";
import ModifyButton from "./ModifyButton";

const Wrapper = styled.li``;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Item = ({ id, todo, isCompleted, userId, setTodos }) => {
  const handleCheckboxClick = async () => {
    const url = `https://www.pre-onboarding-selection-task.shop/todos/${id}`;
    const options = {
      method: "PUT",
      headers: { Authorization: "Bearer " + localStorage.getItem("access_token"), "Content-Type": "application/json" },
      body: JSON.stringify({ todo, isCompleted: !isCompleted }),
    };
    const response = await fetch(url, options);
    if (response.status === 200) {
      const updatedTodo = await response.json();
      setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    }
  };

  const handleDeleteButtonClick = async () => {
    const url = `https://www.pre-onboarding-selection-task.shop/todos/${id}`;
    const options = {
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem("access_token") },
    };
    const response = await fetch(url, options);
    if (response.status === 204) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <Wrapper>
      <label>
        <Checkbox type="checkbox" checked={isCompleted} onClick={handleCheckboxClick} />
        <span>{todo}</span>
        <ModifyButton />
        <DeleteButton onClick={handleDeleteButtonClick} />
      </label>
    </Wrapper>
  );
};

export default Item;
