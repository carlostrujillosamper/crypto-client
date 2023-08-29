import { useState, useEffect } from "react";
import { getTransactions, getEurRates } from "../../api/financialData";
import { TransactionsResponse } from "../../api/types";

export const useFinancialDashboard = () => {
  const [transactions, setTransactions] = useState<TransactionsResponse>({
    transactions: []
  } as TransactionsResponse);
  const [eurRates, setEurRates] = useState<Record<string, number>>({});
  const [error, setError] = useState<Error | unknown>(null);
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getTransactions();
        setTransactions(response);
      } catch (error) {
        setError(error);
      }
    };

    const fetchEurRates = async () => {
      try {
        const response = await getEurRates();
        setEurRates(response);
      } catch (error) {
        setError(error);
      }
    };

    fetchTransactions();
    fetchEurRates();
  }, []);
  return {
    transactions,
    eurRates,
    error
  };
};
