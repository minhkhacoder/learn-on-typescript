/** @format */

// -> cho phép bạn tạo các kiểu dữ liệu mới bằng cách "mapping" (ánh xạ) qua các thuộc tính của một kiểu dữ liệu đã tồn tại.

type Developer = {
  name: string;
};

const kha: Developer = {
  name: "Vo Minh Kha",
  // age: 22 // -> lỗi
};
kha;

// & mapped types
type Developer1 = {
  name: string;
  [key: string]: string | number;
};

const kha1: Developer1 = {
  name: "Vo Minh Kha",
  age: 22,
};
kha1;

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;

// & Mapping Modifiers
// ->
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

// & Key Remapping via `as`
// type MappedTypeWithNewProperties<Type> = {
//   [Properties in keyof Type as NewKeyType]: Type[Properties];
// };

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;

// Remove the 'kind' property
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
};

interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;

//&

type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
