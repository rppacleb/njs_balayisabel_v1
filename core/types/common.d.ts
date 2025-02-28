export type ObjectType = Record<string, Record<string, ObjectType>>;
export type LocalSessionType = { __LOCALSESSION: ObjectType };
