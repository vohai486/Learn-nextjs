import { LoginPayload } from "../models";
import axiosClient from "./axios-client";

const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post("/login", payload);
  },
  logout() {
    return axiosClient.post("/logout");
  },
  getProfile() {
    return axiosClient.get("/profile");
  },
};

export { authApi };
