export const isValidString = <T>(value: T): boolean => {
  return typeof value === "string" && value !== "";
};

export const isNull = <T>(value: T): boolean => {
  return value === null;
};

export const isUndefined = <T>(value: T): boolean => {
  return value === undefined;
};
