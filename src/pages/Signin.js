import SigninForm from "../components/SigninForm";
import useAccessTokenCheck from "../hook/useAccessTokenCheck";

const Signin = () => {
  useAccessTokenCheck();

  return <SigninForm />;
};

export default Signin;
