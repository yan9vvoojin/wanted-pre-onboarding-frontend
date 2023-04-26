import { useNavigate } from "react-router-dom";

import { requestSignin, requestSignup } from "../apis/signApi";
import errorHandler from "../utils/errorHandler";

import { SIGNIN, TODO } from "../constants/routes";

const useSign = () => {
  const navigate = useNavigate();

  const signup = async ({ email, password }) => {
    try {
      await requestSignup(email, password);
      navigate(SIGNIN);
    } catch (error) {
      errorHandler(error);
    }
  };

  const signin = async ({ email, password }) => {
    try {
      const response = await requestSignin(email, password);
      const { access_token } = response.data;
      localStorage.setItem("access_token", access_token);
      navigate(TODO);
    } catch (error) {
      errorHandler(error);
    }
  };

  return { signup, signin };
};

export default useSign;
