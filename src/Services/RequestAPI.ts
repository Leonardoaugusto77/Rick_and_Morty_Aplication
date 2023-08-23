// Services/RequestAPI.ts
import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const RequestAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/character`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
