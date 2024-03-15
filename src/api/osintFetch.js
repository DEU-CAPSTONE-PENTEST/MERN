import axios from "axios";

const backendURL = "http://localhost:3005/api";

const api = axios.create({
  baseURL: backendURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const startOsint = async ({ url, user }) => {
  try {
    const response = await api.post("/osint", { url, user });
    return response.data;
  } catch (error) {
    throw error.response.data.message || error.message;
  }
};
