/** @format */

// Ternary operator
// condition ? true : false
// -> someType extends otherType ? trueType : falseType
type someType<T> = T extends string ? string : boolean;
type someValue = someType<string>; // string
type someValue1 = someType<number>; // boolean

// -> Condition types return union type

type MyInfer<T> = T extends infer R ? R : any;
type MyInfer1 = MyInfer<string>; // string
type MyInfer2 = MyInfer<number>; // number

type OptionsFlags1<Type> = {
  [Property in keyof Type]: Type[Property] extends () => void
    ? Property
    : never;
}[keyof Type];

interface MyStudent {
  name: string;
  age: number;
  updateName(): void;
}

type MyStudentContitional = OptionsFlags1<MyStudent>;
// type MyStudentContitional = "updateName"
