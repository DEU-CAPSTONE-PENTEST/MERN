import axios from "axios";

const backendURL = "http://localhost:3005/api";

const api = axios.create({
  baseURL: backendURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const startOsint = async (data) => {
  try {
    const response = await api.post("/osint", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message || error.message;
  }
};

export const getAllOsints = async (userID) => {
  try {
    const data = { user: userID };

    const response = await api.post("/osint/urls", data); // Passing data as params
    return response.data;
  } catch (error) {
    throw error.response.data.message || error.message;
  }
};

export const getComment = async (commentID) => {
  try {
    const url = `/osint/urls/${commentID}`;

    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw error.response.data.message || error.message;
  }
};
