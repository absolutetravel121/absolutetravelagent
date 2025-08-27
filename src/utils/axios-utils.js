 import { baseUrl } from "@/Config";
import axios from "axios";

// public api request

export const publicRequest = async (options) => {
  const client = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return client.request(options);
};
