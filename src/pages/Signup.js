import SignForm from "../components/SignForm";
import useAccessTokenCheck from "../hooks/useAccessTokenCheck";
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
