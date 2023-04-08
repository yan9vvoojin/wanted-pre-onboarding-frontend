import useAccessTokenCheck from "../hook/useAccessTokenCheck";

import SignForm from "../components/SignForm";
import SignPage from "../styles/SignPage";

const Signin = () => {
  useAccessTokenCheck();

  return (
    <SignPage>
      <SignForm mode="signin" />
    </SignPage>
  );
};

export default Signin;
