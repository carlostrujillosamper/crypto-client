import { SummaryTable } from "./SummaryTable/SummaryTable";
import { TransactionTable } from "./TransactionTable/TransactionTable";
import { transactionTableContainer } from "./styles";
import { useFinancialDashboard } from "./useFinancialDashboard";

export const FinancialDashboard = () => {
  const { transactions, eurRates, error } = useFinancialDashboard();
  if (error) {
    return <div>Something went wrong: {(error as Error).message}</div>;
  }

  return (
    <>
      <h1>Financial Dashboard</h1>
      <h2>Transactions</h2>
      <div style={transactionTableContainer}>
        <TransactionTable
          transactions={transactions.transactions}
          rates={eurRates}
        />
      </div>
      <h2>Summary</h2>
      <SummaryTable transactions={transactions.transactions} rates={eurRates} />
    </>
  );
};
