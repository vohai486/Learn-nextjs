import { ListParams, ListResponse, LoginPayload, Work } from "../models";
import axiosClient from "./axios-client";

export const workApi = {
  getAll(params: Partial<ListParams>): Promise<ListResponse<Work>> {
    return axiosClient.get("/works", { params });
  },
  get(id: string): Promise<Work> {
    return axiosClient.post(`/works/${id}`);
  },
};
