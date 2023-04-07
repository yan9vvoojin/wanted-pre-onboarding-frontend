import Form from "../components/sign/Form";
import useCheckAccessToken from "../hook/useCheckAccessToken";

const Signin = () => {
  useCheckAccessToken();

  return <Form type="signin" />;
};

export default Signin;
