/** @format */

import { IProductNewFeature } from "./interfaces";

// NOTE: const variable: dataTypes = value
// NOTE: const age: number = 30
// NOTE: const name: string = "Vo Minh Kha"
// NOTE: const isBoolean: boolean = false;

// & Tuple -> cố định có bao nhiêu element
// NOTE: example -> [number, string] => [123, "Minh Kha"] --> true
// NOTE: example -> [number, string] => ["123", "Minh Kha"] --> false
// & Enum -> tập hợp các constants (hằng số)
// NOTE: example -> approved, pending, rejected
// & Any -> kiểu dữ liệu nào cũng được hết
// & Union -> hoặc
// NOTE: example -> number | string
// & Literal -> chỉ sử dụng cố định trong phạm vi khai báo (30 | 29 | 13) ngoài phạm vi không được
// NOTE: example ->   type Age = 30 | 29 | 13
// & Function
export function totalNumber(a: number, b: number): number {
  return a + b;
}
// & Void
export function totalVoid(a: number, b: number): void {
  a + b;
}

// & unknow
const aNumber: unknown = 100;
if (typeof aNumber === "number") {
  aNumber.toFixed(2);
}

// & never -> không chứa dữ liệu và đại diện cho một function và trả về lỗi
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function raiseError(err: string): never {
  throw new Error(err);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function reject() {
  return raiseError("error");
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const loop = function forever() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log("Hello world");
  }
};
// NOTE: loop -> never type

// & Interface
const product: IProductNewFeature = {
  name: "car",
  brand: "bmw",
  color: "Red",
};

function addProduct(product: IProductNewFeature) {
  console.log(product);
}

addProduct(product);
