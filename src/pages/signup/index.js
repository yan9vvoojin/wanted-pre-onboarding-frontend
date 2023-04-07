import useCheckAccessToken from "../../components/hook/useCheckAccessToken";
import Form from "../../components/sign/Form";

const Signup = () => {
  useCheckAccessToken();

  return <Form type="signup" />;
};

export default Signup;
