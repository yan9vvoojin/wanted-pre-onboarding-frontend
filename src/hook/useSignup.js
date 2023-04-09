import { useNavigate } from "react-router-dom";

import { SIGNUP_API_URL } from "../constants/api";
import { SIGNIN } from "../constants/routes";

const useSignup = () => {
  const navigate = useNavigate();

  const signup = async ({ email, password }) => {
    try {
      const response = await fetch(SIGNUP_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.status === 201) {
        navigate(SIGNIN);
      } else {
        const { message } = await response.json();
        throw new Error(`회원가입 실패 (${message})`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return signup;
};

export default useSignup;
