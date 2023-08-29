import { TableTemplate } from "../components/themes/Table/types";

export const generateTableData = <T>(
  sourceData: T[],
  template: TableTemplate
) => {
  return sourceData.map((data) => {
    const result: {
      [K in keyof typeof template]: ReturnType<
        (typeof template)[K]["getValue"]
      >;
    } = {};
    for (const key in template) {
      const value = template[key].accessor;
      const index = data[value as keyof T];
      result[key] = template[key].getValue(index as string);
    }
    return result;
  });
};
