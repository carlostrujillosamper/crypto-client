export type TableTemplate = {
  [key: string]: {
    accessor: string;
    getValue: (value: string | number) => string | number;
  };
};

export type TableProps = {
  tableData: Record<string, string | number>[];
  headers: {
    header: string;
    id: string;
  }[];
};
