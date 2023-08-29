import { generateTableData } from "../../../utils/generateTableData";
import { transactionsTemplate } from "../tableTemplates/transactionsTemplate";
import { FinancialTableProps } from "../types";
import { TransactionTableData } from "./types";

export const useTransactionTable = ({
  transactions,
  rates
}: FinancialTableProps): TransactionTableData[] => {
  const mapTransactionsToRates = () => {
    return transactions.map((transaction) => {
      const rate = rates[transaction.currency];
      const eurEquivalent = rate ? transaction.amount * rate : null;
      return {
        ...transaction,
        eurEquivalent
      };
    });
  };

  const mappedTransactions = mapTransactionsToRates();

  const transactionTableData = generateTableData(
    mappedTransactions,
    transactionsTemplate
  );
  return transactionTableData as TransactionTableData[];
};
