import Form from "../components/sign/Form";
import useCheckAccessToken from "../hook/useCheckAccessToken";

const Signup = () => {
  useCheckAccessToken();

  return <Form type="signup" />;
};

export default Signup;
