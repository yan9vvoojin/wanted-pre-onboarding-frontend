import { useCallback, useState } from "react";

import Checkbox from "../styles/Checkbox";
import StyledTodoItem from "../styles/TodoItem";

const TodoItem = ({ id, todo, isCompleted, setTodoList, deleteTodo, updateTodo }) => {
  const [input, setInput] = useState(todo);
  const [isModifyMode, setIsModifyMode] = useState(false);

  const handleCheckboxClick = () => {
    const newTodo = { id, todo, isCompleted: !isCompleted };
    updateTodo(newTodo, setTodoList);
  };

  const handleSubmitButtonClick = () => {
    const newTodo = { id, isCompleted, todo: input };
    updateTodo(newTodo, setTodoList);
    setIsModifyMode(false);
  };

  const handleCancelButtonClick = () => {
    setInput(todo);
    setIsModifyMode(false);
  };

  const handleModifyButtonClick = () => {
    setIsModifyMode(true);
  };

  const handleDeleteButtonClick = () => {
    deleteTodo(id, setTodoList);
  };

  const handleInputChange = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [setInput],
  );

  return (
    <StyledTodoItem>
      <label>
        <Checkbox type="checkbox" checked={isCompleted} onChange={handleCheckboxClick} />
        {isModifyMode ? (
          <input data-testid="modify-input" value={input} onChange={handleInputChange} />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      {isModifyMode ? (
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
    </StyledTodoItem>
  );
};

export default TodoItem;
