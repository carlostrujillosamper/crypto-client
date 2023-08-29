import { parseNumberToTwoFixed } from "./parseNumberToTwoFixed";

export const parseEurEquivalence = (value: string | number) => {
  return value ? parseNumberToTwoFixed(value) : "Not Available";
};
