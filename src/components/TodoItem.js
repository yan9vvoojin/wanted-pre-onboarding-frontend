import styled from "styled-components";
import useDeleteTodo from "../hook/useDeleteTodo";

import useUpdateTodo from "../hook/useUpdateTodo";
import DeleteTodoButton from "./DeleteTodoButton";
import ModifyTodoButton from "./ModifyTodoButton";

const Wrapper = styled.li``;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const TodoItem = ({ id, todo, isCompleted, setTodoList }) => {
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();

  const handleCheckboxClick = async () => {
    const newTodo = { id, todo, isCompleted: !isCompleted };
    updateTodo(newTodo, setTodoList);
  };

  const handleDeleteButtonClick = () => {
    deleteTodo(id);
  };

  return (
    <Wrapper>
      <label>
        <Checkbox type="checkbox" checked={isCompleted} onChange={handleCheckboxClick} />
        <span>{todo}</span>
        <ModifyTodoButton />
        <DeleteTodoButton onClick={handleDeleteButtonClick} />
      </label>
    </Wrapper>
  );
};

export default TodoItem;
