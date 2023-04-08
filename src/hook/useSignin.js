import { useNavigate } from "react-router-dom";

import { SIGNIN_API_URL } from "../constants/api";
import { TODO } from "../constants/routes";

const useSignin = () => {
  const navigate = useNavigate();

  const signin = async (email, password) => {
    try {
      const response = await fetch(SIGNIN_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.status === 200) {
        const { access_token } = await response.json();
        localStorage.setItem("access_token", access_token);
        navigate(TODO);
      } else {
        const { message } = await response.json();
        throw new Error(`로그인 실패 (${message})`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return signin;
};

export default useSignin;
