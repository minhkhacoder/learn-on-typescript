/** @format */

const devices = [
  {
    name: "IPhone",
    price: 1000,
  },
  {
    name: "Samsung",
    price: 2000,
  },
  {
    name: "Nokia",
    price: 500,
  },
];

// -> V -> {  name: "Nokia",  price: 500, }
// -> K là những key của V (name, price)

function getDevicesKeys<V, K extends keyof V>(items: V[], dataKey: K): V[K][] {
  return items.map((item) => item[dataKey]);
}
console.log(getDevicesKeys(devices, "name"));
