import SignForm from "../components/SignForm";
import useAccessTokenCheck from "../hooks/useAccessTokenCheck";
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
