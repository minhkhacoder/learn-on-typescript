/** @format */

// & function overloading
// -> function have the same name
// -> same amount or different amount of parameter
// -> different type and same or different return type
function total(a: number, b: number): number;
function total(a: string, b: string): string;
function total(a: any, b: any): any {
  return a + b;
}
total(5, 7); // 12
total("a", "b"); //ab

interface Coordinate {
  x: number;
  y: number;
}

// -> cách viết ban đầu
function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return { ...obj };
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return { x, y };
}

parseCoordinateFromObject({ x: 10, y: 20 });
parseCoordinateFromNumbers(10, 20);

// -> cách viết tối ưu
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: any, arg2?: any): Coordinate {
  let coord = { x: arg1 as number, y: arg2 as number };

  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}

parseCoordinate({ x: 10, y: 20 });
parseCoordinate(10, 20);

// & Normal function
function addNumbers(a: number, b: number): number {
  return a + b;
}
addNumbers(5, 5);

// & Arrow function
const addStrings = (a: string, b: string): string => a + b;
addStrings("a", "b");

// & Default parameters
function addNumbersWithDefaultParameters(
  a: number = 10,
  b: number = 10
): number {
  return a + b;
}
addNumbersWithDefaultParameters(); // 20

// & Union types
function format(title: string, desc: string, amount: string | number): string {
  return `${title} ${desc} ${amount}`;
}
format("title", "description", "200");
format("title", "description", 200);

// & Void functions
function contact(email: string, phone: number): void {
  console.log(email, phone);
}
contact("email@gmail.com", 123456789);

// & Promise functions
const fetchData = (url: string) => Promise.resolve(`Get data from ${url}`);
fetchData("url");

// & Rest parameters
function information(id: number, ...names: string[]): string {
  return `${id} ${names.join(" ")}`;
}
information(1, "abc", "cbv", "kkk");

// & With callback
function handleFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}
function simpleCallback(): void {
  console.log("Đã gọi hàm callback!");
}
handleFile("Xin chào, đây là ví dụ về callback!", simpleCallback);

// & function params with params
function handleUpdateArray(
  numbers: number[],
  update: (n: number) => number
): number[] {
  return numbers.map((item) => update(item));
}
handleUpdateArray([1, 2, 3, 4, 5], (n) => n * 5);

// & function as types
type UpdateNumber = (n: number) => number; // -> function type
function handleUpdateNumberArray(
  numbers: number[],
  update: UpdateNumber
): number[] {
  return numbers.map((item) => update(item));
}
handleUpdateNumberArray([1, 2, 3, 4, 5], (n) => n * 5);

// & function return function
function handleValue(val: number): (n: number) => number {
  return (n: number): number => n * val;
}
const value = handleValue(5);
console.log(value(10)); // 50
