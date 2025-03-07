import axios from "axios";

export const API_BASE_URL = "https://mundo-cripto-analyser-api.vercel.app/v1/tokens";

export const fetchTokenReport = async (token: string) => {

  try {
    const response = await axios.get(`${API_BASE_URL}/${token}/report`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar o relatório do token:", error);
    throw error;
  }
};
