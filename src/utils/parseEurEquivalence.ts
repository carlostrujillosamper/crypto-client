import { parseNumberToTwoFixed } from "./parseNumberToTwoFixed";

export const parseEurEquivalence = (value: string | number) => {
  return value || value === 0 ? parseNumberToTwoFixed(value) : "Not Available";
};
