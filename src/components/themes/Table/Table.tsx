import { TableProps } from "./types";
import { isValueError } from "../../../utils/isValueError";
import { ErrorCell } from "./ErroCell";
import { Cell } from "./Cell";
import { tableStyles } from "./styles";

export const Table = ({ headers, tableData }: TableProps) => {
  return (
    <table style={tableStyles}>
      <thead>
        <tr>
          {headers.map((header) => {
            return (
              <th
                style={{ border: "1px solid black", padding: "10px" }}
                key={header.id}
              >
                {header.header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => (
          <tr key={data.id}>
            {Object.entries(data).map(([key, value]) => {
              if (key === "id") {
                return null;
              }
              if (isValueError(value)) {
                return <ErrorCell cellValue={value} key={key} />;
              }
              return <Cell cellValue={value} key={key} />;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
