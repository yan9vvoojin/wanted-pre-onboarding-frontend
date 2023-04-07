import useCheckAccessToken from "../../components/hook/useCheckAccessToken";
import Form from "../../components/sign/Form";

const Signin = () => {
  useCheckAccessToken();

  return <Form type="signin" />;
};

export default Signin;
