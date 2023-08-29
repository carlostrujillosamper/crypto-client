import { errorCellStyles } from "./styles";

export const ErrorCell = ({ cellValue }: { cellValue: string | number }) => {
  return <td style={errorCellStyles}>{cellValue}</td>;
};
