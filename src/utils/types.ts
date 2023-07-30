/** @format */

export type Age = 18 | 20 | 23; // * -> literal

// & Union types
// -> Type A | Type B
// & Intersection types (&)
// -> Type A & Type B
// & Type casting (ép kiểu) | type conversion (chuyển đổi kiểu) | type coercion (type coercion) (as)
// -> ép kiểu
const value: any = "42";
const numberValue: number = Number(value); // Ép kiểu tường minh từ any sang number
console.log(numberValue); // 42

// & Type assertion (as or <>)
// -> khẳng định kiểu
const values: any = "42";
const numberValues: number = values as number; // Type assertion sử dụng cú pháp "as"
// Hoặc
const numbers: number = <number>values; // Type assertion sử dụng cú pháp "<>"
console.log(numberValues);
console.log(numbers);
