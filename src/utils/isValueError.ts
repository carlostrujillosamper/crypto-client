import { CellErrorValues } from "../components/themes/Table/types";

export const isValueError = (value: string | number): boolean => {
  return Object.values(CellErrorValues).includes(value as CellErrorValues);
};
