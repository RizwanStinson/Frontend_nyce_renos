// services/estimateService.ts
import axios from "axios";
import { IEstimate } from "../interfaces/types";

const API_URL = "https://nyce-renos.onrender.com/estimates/post"; // Change to your backend endpoint

export const postEstimates = async (data: IEstimate[]) => {
  try {
    console.log("Sending data:", data);
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Error posting estimates:", error);
    throw error;
  }
};
