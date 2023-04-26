import { useNavigate } from "react-router-dom";

import { requestSignin, requestSignup } from "../apis/signApi";
import { SIGNIN, TODO } from "../constants/routes";

const useSign = () => {
  const navigate = useNavigate();

  const signin = async ({ email, password }) => {
    await requestSignin(email, password);
    navigate(TODO);
  };

  const signup = async ({ email, password }) => {
    await requestSignup(email, password);
    navigate(SIGNIN);
  };

  return { signup, signin };
};

export default useSign;
