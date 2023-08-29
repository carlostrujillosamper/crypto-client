import { cellStyles } from "./styles";

export const Cell = ({ cellValue }: { cellValue: string | number }) => {
  return <td style={cellStyles}>{cellValue}</td>;
};
