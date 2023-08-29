export const parseNumberToTwoFixed = (value: number | string) => {
  return parseFloat(Number(value).toFixed(2));
};
