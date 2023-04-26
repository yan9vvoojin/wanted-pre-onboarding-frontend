import axios from "axios";

import { SIGN_API_URL } from "../constants/api";
import errorHandler from "../utils/errorHandler";

const signInstance = axios.create({
  baseURL: SIGN_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const requestSignup = async (email, password) => {
  try {
    await signInstance.post("/signup", { email, password });
  } catch (error) {
    errorHandler(error);
  }
};

export const requestSignin = async (email, password) => {
  try {
    const response = await signInstance.post("/signin", {
      email,
      password,
    });
    const { access_token } = response.data;
    localStorage.setItem("access_token", access_token);
  } catch (error) {
    errorHandler(error);
  }
};
