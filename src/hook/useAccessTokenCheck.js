import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useAccessTokenCheck = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token && (pathname === "/signup" || pathname === "/signin")) {
      navigate("/todo");
      return;
    }
    if (!access_token && pathname === "/todo") {
      navigate("/signin");
      return;
    }
  }, [navigate, pathname]);
};

export default useAccessTokenCheck;
