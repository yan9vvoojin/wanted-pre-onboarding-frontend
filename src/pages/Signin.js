import Form from "../components/sign/Form";
import useAccessTokenCheck from "../hook/useAccessTokenCheck";

const Signin = () => {
  useAccessTokenCheck();

  return <Form type="signin" />;
};

export default Signin;
