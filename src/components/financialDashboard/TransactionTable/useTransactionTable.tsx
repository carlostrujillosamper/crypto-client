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
      const eurEquivalent = transaction.amount * rate;
      return {
        ...transaction,
        eurEquivalent
      };
    });
  };

  const mappedTransactions = mapTransactionsToRates();

  const transactionTableData: TransactionTableData[] = generateTableData(
    mappedTransactions,
    transactionsTemplate
  );
  return transactionTableData;
};
