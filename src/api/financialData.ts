import { createHttpClient } from "../lib/http/client";
import { EurRatesResponse, TransactionsResponse } from "./types";

const httpClient = createHttpClient("http://localhost:8080/api");

export const getTransactions = async (): Promise<TransactionsResponse> => {
  try {
    const response = await httpClient.get("/transactions");
    return response.body as TransactionsResponse;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to get transactions: ${error.message}`);
      throw error;
    }
    throw error;
  }
};

export const getEurRates = async (): Promise<EurRatesResponse> => {
  try {
    const response = await httpClient.get("/eur-rates");
    return response.body as EurRatesResponse;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to get rates: ${error.message}`);
      throw error;
    }
    throw error;
  }
};
