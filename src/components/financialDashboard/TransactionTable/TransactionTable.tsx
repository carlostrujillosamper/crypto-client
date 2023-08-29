import { useTransactionTable } from "./useTransactionTable";
import { transactionTableHeaders } from "../tableHeaders/transactionTableHeaders";
import { FinancialTableProps } from "../types";
import { Table } from "../../themes/Table/Table";

export const TransactionTable = ({
  transactions,
  rates
}: FinancialTableProps) => {
  const transactionTableData = useTransactionTable({ transactions, rates });
  return (
    <Table headers={transactionTableHeaders} tableData={transactionTableData} />
  );
};
