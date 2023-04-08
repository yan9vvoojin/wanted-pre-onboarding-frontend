import useAccessTokenCheck from "../hook/useAccessTokenCheck";

import SignForm from "../components/SignForm";

const Signin = () => {
  useAccessTokenCheck();

  return <SignForm mode="signin" />;
};

export default Signin;
