export type CurrencyAccumulator = {
  [currency: string]: {
    totalCompletedWithdrawals: number;
    totalCompletedDeposits: number;
    totalPendingWithdrawals: number;
    totalPendingDeposits: number;
    totalBalance: number;
    totalBalanceEurEquiv: number | null;
  };
};
