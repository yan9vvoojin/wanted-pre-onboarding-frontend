const errorHandler = (error) => {
  const { data } = error.response;
  const { message } = data;
  alert(message);
};

export default errorHandler;
