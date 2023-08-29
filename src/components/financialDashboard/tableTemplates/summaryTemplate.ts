import { parseEurEquivalence } from "../../../utils/parseEurEquivalence";
import { parseNumberToTwoFixed } from "../../../utils/parseNumberToTwoFixed";
import { TableTemplate } from "../../themes/Table/types";

export const summaryTemplate: TableTemplate = {
  currency: {
    accessor: "currency",
    getValue: (value: string | number) => value
  },
  totalCompletedWithdrawals: {
    accessor: "totalCompletedWithdrawals",
    getValue: (value: number | string) => parseNumberToTwoFixed(value)
  },
  totalCompletedDeposits: {
    accessor: "totalCompletedDeposits",
    getValue: (value: number | string) => parseNumberToTwoFixed(value)
  },
  totalPendingWithdrawals: {
    accessor: "totalPendingWithdrawals",
    getValue: (value: number | string) => parseNumberToTwoFixed(value)
  },
  totalPendingDeposits: {
    accessor: "totalPendingDeposits",
    getValue: (value: number | string) => parseNumberToTwoFixed(value)
  },
  id: {
    accessor: "id",
    getValue: (value: string | number) => value
  },
  totalBalance: {
    accessor: "totalBalance",
    getValue: (value: number | string) => parseNumberToTwoFixed(value)
  },
  totalBalanceEurEquiv: {
    accessor: "totalBalanceEurEquiv",
    getValue: (value: number | string) => parseEurEquivalence(value)
  }
};
