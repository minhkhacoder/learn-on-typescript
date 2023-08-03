/** @format */

type ReplaceAll<
  S extends string,
  F extends string,
  T extends string
> = F extends ""
  ? S
  : S extends `${infer Left}${F}${infer Right}`
  ? `${Left}${T}${Right}${ReplaceAll<Right, F, T>}`
  : S;

type ResultReplace = ReplaceAll<"demo item demo", "demo", "item">;
// demo item demo
// Left: ""
// From: "demo"
// Right: " item demo"
