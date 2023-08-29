import { v4 as uuid } from "uuid";

export const summaryTableHeaders = [
  { header: "currency", id: uuid() },
  { header: "total completed withdrawals", id: uuid() },
  { header: "total completed deposits", id: uuid() },
  { header: "total pending withdrawals", id: uuid() },
  { header: "total pending deposits", id: uuid() },
  { header: "total balance", id: uuid() },
  { header: "total balance eur equiv", id: uuid() }
];
