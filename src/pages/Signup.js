import Form from "../components/sign/Form";

import useAccessTokenCheck from "../hook/useAccessTokenCheck";

const Signup = () => {
  useAccessTokenCheck();

  return <Form type="signup" />;
};

export default Signup;
