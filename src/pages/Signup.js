import useAccessTokenCheck from "../hook/useAccessTokenCheck";

import SignForm from "../components/SignForm";

const Signup = () => {
  useAccessTokenCheck();

  return <SignForm mode="signup" />;
};

export default Signup;
