import { useState } from "react";
import deleteTodo from "../utils/deleteTodo";
import updateTodo from "../utils/updateTodo";

import Checkbox from "../styles/Checkbox";
import Input from "../styles/Input";
import TodoButton from "../styles/TodoButton";
import TodoButtons from "../styles/TodoButtons";
import StyledTodoItem from "../styles/TodoItem";
import TodoLabel from "../styles/TodoLabel";

const TodoItem = ({ id, todo, isCompleted, setTodoList }) => {
  const [input, setInput] = useState(todo);
  const [isModifyMode, setIsModifyMode] = useState(false);

  const handleCheckboxClick = () => {
    const newTodo = { id, todo, isCompleted: !isCompleted };
    updateTodo(newTodo, setTodoList);
  };

  const handleSubmit = () => {
    if (input.trim() === "") return;
    const newTodo = { id, isCompleted, todo: input };
    updateTodo(newTodo, setTodoList);
    setIsModifyMode(false);
  };

  const handleCancel = () => {
    setInput(todo);
    setIsModifyMode(false);
  };

  const handleModify = () => {
    setIsModifyMode(true);
  };

  const handleDelete = () => {
    deleteTodo(id, setTodoList);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <StyledTodoItem>
      <TodoLabel>
        <Checkbox type="checkbox" checked={isCompleted} onChange={handleCheckboxClick} />
        {isModifyMode && <Input data-testid="modify-input" value={input} onChange={handleInputChange} />}
        {!isModifyMode && <span>{todo}</span>}
      </TodoLabel>
      {isModifyMode && (
        <TodoButtons>
          <TodoButton data-testid="submit-button" onClick={handleSubmit}>
            제출
          </TodoButton>
          <TodoButton data-testid="cancel-button" onClick={handleCancel}>
            취소
          </TodoButton>
        </TodoButtons>
      )}
      {!isModifyMode && (
        <TodoButtons>
          <TodoButton data-testid="modify-button" onClick={handleModify}>
            수정
          </TodoButton>
          <TodoButton data-testid="delete-button" onClick={handleDelete}>
            삭제
          </TodoButton>
        </TodoButtons>
      )}
    </StyledTodoItem>
  );
};

export default TodoItem;
