import { ReactNode } from "react";
import { TableProps } from "./types";
import { cellStyles, tableStyles } from "./styles";

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
              return (
                <td key={key} style={cellStyles}>
                  {value as ReactNode}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
