import { v4 as uuid } from "uuid";

export const transactionTableHeaders = [
  { header: "timestamp", id: uuid() },
  { header: "currency", id: uuid() },
  { header: "amount", id: uuid() },
  { header: "eur equiv", id: uuid() },
  { header: "type", id: uuid() },
  { header: "status", id: uuid() }
];
