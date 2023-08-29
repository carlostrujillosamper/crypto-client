import { SummaryTable } from "./SummaryTable/SummaryTable";
import { TransactionTable } from "./TransactionTable/TransactionTable";
import { useFinancialDashboard } from "./useFinancialDashboard";

export const FinancialDashboard = () => {
  const { transactions, eurRates, error } = useFinancialDashboard();
  if (error) {
    return <div>Something went wrong: {(error as Error).message}</div>;
  }

  return (
    <>
      <TransactionTable
        transactions={transactions.transactions}
        rates={eurRates}
      />
      <SummaryTable transactions={transactions.transactions} rates={eurRates} />
    </>
  );
};
