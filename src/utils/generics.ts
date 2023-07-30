/** @format */

// & [number, number] -> [100, 2000]

type ThreeDCoordinate = [x: number, y: number, z: number];
function addThreeDCoordinate(
  a: ThreeDCoordinate,
  b: ThreeDCoordinate
): ThreeDCoordinate {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

addThreeDCoordinate([1, 100, 200], [200, 400, 500]);

// & useState -> const [value, setValue] = useState('developer');

function simpleUseState<T>(initialValue: T): [() => T, (value: T) => void] {
  let state: T = initialValue;

  function getter(): T {
    return state;
  }

  function setter(value: T): void {
    state = value;
  }

  return [getter, setter];
}

const [getterGeneric, setterGeneric] = simpleUseState("Developer");
console.log(getterGeneric()); // -> Developer
setterGeneric("Frontend");
console.log(getterGeneric()); // -> Frontend
// -> ts-node tuples.ts

const [getterGeneric1, setterGeneric1] = simpleUseState(100);
console.log(getterGeneric1()); // -> 100
setterGeneric1(200);
console.log(getterGeneric1()); // -> 200

// -> <R> là generic
interface Rank<R> {
  item: R;
  rank: number;
}

function ranker<R>(item: R[], rank: (v: R) => number): R[] {
  const ranks: Rank<R>[] = item.map((item) => ({
    item: item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}
// console.log(ranker([1, 2, 3, 4, 5], (number) => number * 5));
const langs: { name: string; difficult: number }[] = [
  {
    name: "Javascript",
    difficult: 80,
  },
  {
    name: "Typescript",
    difficult: 70,
  },
  {
    name: "ReactJS",
    difficult: 60,
  },
];
console.log(ranker(langs, ({ difficult }) => difficult));
