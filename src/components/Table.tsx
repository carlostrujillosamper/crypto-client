import { useEffect, useState } from "react";
import { getEurRates, getTransactions } from "../api/financialData";
import { TransactionsResponse } from "../api/types";

export const Table = () => {
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
        const response = await getEurRates(); // Assuming getEurRates is a function that fetches the EUR rates
        setEurRates(response); // Assuming setEurRates is a state setter function for EUR rates
      } catch (error) {
        setError(error);
      }
    };

    fetchTransactions();
    fetchEurRates();
  }, []);

  const mapTransactionsToRates = () => {
    return transactions.transactions.map((transaction) => {
      const rate = eurRates[transaction.currency];
      const date = new Date(transaction.timestamp);
      const formattedDate = `${date.toLocaleString("default", {
        month: "short"
      })} ${date.getDate()} ${date.getFullYear()}`;
      const amount = parseFloat(transaction.amount.toFixed(2));
      const eurEquivalent = rate
        ? parseFloat((transaction.amount * rate).toFixed(2))
        : "Not available";
      return {
        ...transaction,
        amount,
        timestamp: formattedDate,
        eurEquivalent
      };
    });
  };

  const mappedTransactions = mapTransactionsToRates();

  const groupTransactionsByCurrency = () => {
    return mappedTransactions.reduce((acc, transaction) => {
      const { currency, type, status, amount } = transaction;
      const transactionIsCompleted = status === "completed";
      const transactionIsPending = status === "pending";

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

      const handleTransaction = (
        transactionIsCompleted: boolean,
        transactionIsPending: boolean,
        amount: number,
        type: string
      ) => {
        if (transactionIsCompleted) {
          if (type === "withdrawal") {
            acc[currency].totalCompletedWithdrawals += amount;
          } else if (type === "deposit") {
            acc[currency].totalCompletedDeposits += amount;
          }
        }
        if (transactionIsPending) {
          if (type === "withdrawal") {
            acc[currency].totalPendingWithdrawals += amount;
          } else if (type === "deposit") {
            acc[currency].totalPendingDeposits += amount;
          }
        }
      };

      handleTransaction(
        transactionIsCompleted,
        transactionIsPending,
        amount,
        type
      );

      acc[currency].totalBalance =
        acc[currency].totalCompletedDeposits -
        acc[currency].totalCompletedWithdrawals;

      acc[currency].totalBalanceEurEquiv = eurRates[currency]
        ? acc[currency].totalBalance * eurRates[currency]
        : "Not available";

      return acc;
    }, {});
  };
  const groupedTransactions = groupTransactionsByCurrency();

  if (error) {
    return <div>Something went wrong: {(error as Error).message}</div>;
  }
  return (
    <>
      <table style={{ borderCollapse: "collapse", borderSpacing: "10px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Timestamp
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Currency
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Amount
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              EUR Equivalent
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Type</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {mappedTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {transaction.timestamp}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {transaction.currency}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {transaction.amount}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {transaction.eurEquivalent}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {transaction.type}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "40px" }}>
        <table style={{ borderCollapse: "collapse", borderSpacing: "10px" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Currency
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Total Completed Withdrawals
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Total Completed Deposits
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Total Pending Withdrawals
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Total Pending Deposits
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Total Balance
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Total Balance EUR Equivalent
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedTransactions).map(([currency, data]) => (
              <tr key={currency}>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {currency}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {data.totalCompletedWithdrawals}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {data.totalCompletedDeposits}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {data.totalPendingWithdrawals}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {data.totalPendingDeposits}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {data.totalBalance}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {data.totalBalanceEurEquiv}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
