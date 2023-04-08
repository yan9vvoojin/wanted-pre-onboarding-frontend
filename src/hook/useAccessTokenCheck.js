import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SIGNIN, SIGNUP, TODO } from "../constants/routes";

const useAccessTokenCheck = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token && (pathname === SIGNIN || pathname === SIGNUP)) {
      navigate(TODO);
      return;
    }
    if (!access_token && pathname === TODO) {
      navigate(SIGNIN);
      return;
    }
  }, [navigate, pathname]);
};

export default useAccessTokenCheck;
