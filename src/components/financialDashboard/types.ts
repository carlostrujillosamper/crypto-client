import { TransactionsResponse, EurRatesResponse } from "../../api/types";

export type FinancialTableProps = {
  transactions: TransactionsResponse["transactions"];
  rates: EurRatesResponse;
};
