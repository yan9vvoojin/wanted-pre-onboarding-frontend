import useAccessTokenCheck from "../hook/useAccessTokenCheck";

import SignForm from "../components/SignForm";
import SignPage from "../styles/SignPage";

const Signup = () => {
  useAccessTokenCheck();

  return (
    <SignPage>
      <SignForm mode="signup" />
    </SignPage>
  );
};

export default Signup;
