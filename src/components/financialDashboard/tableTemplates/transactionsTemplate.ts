import { parseEurEquivalence } from "../../../utils/parseEurEquivalence";
import { parseNumberToTwoFixed } from "../../../utils/parseNumberToTwoFixed";
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
    getValue: (value: number | string) => value
  },
  amount: {
    accessor: "amount",
    getValue: (value: number | string) => parseNumberToTwoFixed(value)
  },
  eurEquivalent: {
    accessor: "eurEquivalent",
    getValue: (value: number | string) => {
      return parseEurEquivalence(value);
    }
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
