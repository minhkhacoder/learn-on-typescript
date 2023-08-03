/** @format */

const obj = {
  foo: {
    a: true,
    b: 20,
  },
  baz: {
    c: false,
    d: 30,
  },
};

function getDeepValue<T, K extends keyof T, S extends keyof T[K]>(
  obj: T,
  firstKey: K,
  secondKey: S
) {
  return obj[firstKey][secondKey];
}

const result = getDeepValue(obj, "foo", "a");
console.log(result);
