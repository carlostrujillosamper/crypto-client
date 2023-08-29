import { FinancialTableProps } from "../types";
import { useSummaryTable } from "./useSummaryTable";
import { summaryTableHeaders } from "../tableHeaders/summaryTableHeaders";
import { Table } from "../../themes/Table/Table";

export const SummaryTable = ({ transactions, rates }: FinancialTableProps) => {
  const summaryTableData = useSummaryTable({ transactions, rates });
  return <Table tableData={summaryTableData} headers={summaryTableHeaders} />;
};
