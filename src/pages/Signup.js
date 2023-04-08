import SignupForm from "../components/SignupForm";
import useAccessTokenCheck from "../hook/useAccessTokenCheck";

const Signup = () => {
  useAccessTokenCheck();

  return <SignupForm />;
};

export default Signup;
