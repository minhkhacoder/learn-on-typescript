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

function simpleUseState(value: string): [() => string, (val: string) => void] {
  return [
    () => value,
    (val: string) => {
      value = val;
    },
  ];
}

const [strGetter, strSetter] = simpleUseState("Developer");
console.log(strGetter()); // -> Developer
strSetter("Frontend");
console.log(strGetter()); // -> Frontend
// -> ts-node tuple.ts
