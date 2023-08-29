export const findDistinctValues = <T extends Record<string, unknown>>(
  sourceData: T[],
  filterBy: keyof T
): string[] => {
  const distinctValues: string[] = [];
  sourceData.forEach((data: T) => {
    if (!distinctValues.includes(data[filterBy] as string)) {
      distinctValues.push(data[filterBy] as string);
    }
  });
  return distinctValues;
};
