const DeleteButton = ({ onClick }) => {
  return (
    <button data-testid="delete-button" onClick={onClick}>
      삭제
    </button>
  );
};

export default DeleteButton;
