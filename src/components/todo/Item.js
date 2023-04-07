import styled from "styled-components";

const Wrapper = styled.li``;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Item = ({ id, todo, isCompleted, userId }) => {
  return (
    <Wrapper>
      <label>
        <Checkbox type="checkbox" checked={isCompleted} />
        <span>{todo}</span>
      </label>
    </Wrapper>
  );
};

export default Item;
