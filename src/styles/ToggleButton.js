import styled from "styled-components";

import TodoButton from "./TodoButton";

const ToggleButton = styled(TodoButton)`
  display: ${(props) => (props.shouldDisplay ? "block" : "none")};
`;

export default ToggleButton;
