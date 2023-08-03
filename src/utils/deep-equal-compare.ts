/** @format */

function deepEqualCompare<T>(
  a: T extends any[] ? "don't pass an array here" : T,
  b: T extends any[] ? "don't pass an array here" : T
): boolean {
  return a === b;
}
deepEqualCompare(true, true);
deepEqualCompare("true", "true");
deepEqualCompare(999, 999);
