type TransactionType = "withdrawal" | "deposit";
type TransactionStatus = "pending" | "completed";

type Transaction = {
  id: string;
  timestamp: string;
  type: TransactionType;
  status: TransactionStatus;
  currency: string;
  amount: number;
};

export type TransactionsResponse = {
  transactions: Transaction[];
};
