import axios from "axios";

import { SIGN_API_URL } from "../constants/api";

const signInstance = axios.create({
  baseURL: SIGN_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const requestSignup = async (email, password) => {
  return await signInstance.post("/signup", { email, password });
};

export const requestSignin = async (email, password) => {
  return await signInstance.post("/signin", {
    email,
    password,
  });
};
