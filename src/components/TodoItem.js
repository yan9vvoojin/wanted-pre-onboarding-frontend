import styled from "styled-components";
import useDeleteTodo from "../hook/useDeleteTodo";

import { useState } from "react";
import useUpdateTodo from "../hook/useUpdateTodo";

const Wrapper = styled.li``;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const TodoItem = ({ id, todo, isCompleted, setTodoList }) => {
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();
  const [isModifyButtonClicked, setIsModifyButtonClicked] = useState(false);
  const [input, setInput] = useState(todo);

  const handleCheckboxClick = () => {
    const newTodo = { id, todo, isCompleted: !isCompleted };
    updateTodo(newTodo, setTodoList);
  };

  const handleSubmitButtonClick = () => {
    const newTodo = { id, isCompleted, todo: input };
    updateTodo(newTodo, setTodoList);
    setIsModifyButtonClicked(false);
  };

  const handleCancelButtonClick = () => {
    setIsModifyButtonClicked(false);
    setInput(todo);
  };

  const handleModifyButtonClick = () => {
    setIsModifyButtonClicked(true);
  };

  const handleDeleteButtonClick = () => {
    deleteTodo(id, setTodoList);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Wrapper>
      <label>
        <Checkbox type="checkbox" checked={isCompleted} onChange={handleCheckboxClick} />
        {isModifyButtonClicked ? (
          <input data-testid="modify-input" value={input} onChange={handleInputChange} />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      {isModifyButtonClicked ? (
        <>
          <button onClick={handleSubmitButtonClick}>제출</button>
          <button onClick={handleCancelButtonClick}>취소</button>
        </>
      ) : (
        <>
          <button data-testid="modify-button" onClick={handleModifyButtonClick}>
            수정
          </button>
          <button data-testid="delete-button" onClick={handleDeleteButtonClick}>
            삭제
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default TodoItem;
