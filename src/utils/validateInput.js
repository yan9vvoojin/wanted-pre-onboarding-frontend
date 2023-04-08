const validateInput = (type, value) => {
  if (type === "email") {
    return value.includes("@");
  }
  if (type === "password") {
    return value.length >= 8;
  }
};

export default validateInput;
