import { TableTemplate } from "../../themes/Table/types";

export const transactionsTemplate: TableTemplate = {
  timestamp: {
    accessor: "timestamp",
    getValue: (value: string | number) =>
      `${new Date(value).toLocaleString("default", {
        month: "short"
      })} ${new Date(value).getDate()} ${new Date(value).getFullYear()}`
  },
  currency: {
    accessor: "currency",
    getValue: (value: string | number) => value
  },
  amount: {
    accessor: "amount",
    getValue: (value: number | string) => parseFloat(Number(value).toFixed(2))
  },
  eurEquivalent: {
    accessor: "eurEquivalent",
    getValue: (value: number | string) =>
      value ? parseFloat(Number(value).toFixed(2)) : "not available"
  },
  type: {
    accessor: "type",
    getValue: (value: string | number) => value
  },
  status: {
    accessor: "status",
    getValue: (value: string | number) => value
  },
  id: {
    accessor: "id",
    getValue: (value: string | number) => value
  }
};
