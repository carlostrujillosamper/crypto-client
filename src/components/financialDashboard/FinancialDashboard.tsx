import { SummaryTable } from "./SummaryTable/SummaryTable";
import { TransactionTable } from "./TransactionTable/TransactionTable";
import { useFinancialDashboard } from "./useFinancialDashboard";
import { error as errorStyle } from "../themes/Table/styles";
import { transactionTableContainer } from "./styles";

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

      <div style={errorStyle}>
        <p>
          ** Not Available : the Eur Equivalence rate for this currency is not
          available at this time please try again later
        </p>
      </div>
    </>
  );
};
