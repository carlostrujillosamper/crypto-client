import { TransactionsResponse, EurRatesResponse } from "../../../api/types";
import { FinancialTableProps } from "../types";
import { CurrencyAccumulator } from "./types";

export const useSummaryTable = ({
  transactions,
  rates
}: FinancialTableProps) => {
  const groupTransactionsByCurrency = (
    transactionData: TransactionsResponse["transactions"],
    rateData: EurRatesResponse
  ) => {
    return transactionData.reduce((acc, transaction) => {
      const { currency, type, status, amount } = transaction;
      const isCompleted = status === "completed";
      const isPending = status === "pending";
      const isWithdrawal = type === "withdrawal";
      const isDeposit = type === "deposit";

      if (!acc[currency]) {
        acc[currency] = {
          totalCompletedWithdrawals: 0,
          totalCompletedDeposits: 0,
          totalPendingWithdrawals: 0,
          totalPendingDeposits: 0,
          totalBalance: 0,
          totalBalanceEurEquiv: 0
        };
      }

      if (isCompleted) {
        acc[currency].totalCompletedWithdrawals += isWithdrawal ? amount : 0;
        acc[currency].totalCompletedDeposits += isDeposit ? amount : 0;
      }
      if (isPending) {
        acc[currency].totalPendingWithdrawals += isWithdrawal ? amount : 0;
        acc[currency].totalPendingDeposits += isDeposit ? amount : 0;
      }

      acc[currency].totalBalance =
        acc[currency].totalCompletedDeposits -
        acc[currency].totalCompletedWithdrawals;

      acc[currency].totalBalanceEurEquiv = rateData[currency]
        ? acc[currency].totalBalance * rateData[currency]
        : "Not available";

      return acc;
    }, {} as CurrencyAccumulator);
  };
  const groupedTransactions = groupTransactionsByCurrency(transactions, rates);
  const summaryTableData = Object.entries(groupedTransactions).map(
    ([currency, data]) => {
      return {
        currency,
        id: currency,
        ...data
      };
    }
  );
  return summaryTableData;
};
