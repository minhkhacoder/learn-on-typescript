/** @format */

// & in
function log(obj: { name: string } | { age: number }) {
  if ("name" in obj) {
    console.log(obj.name);
  }
  if ("age" in obj) {
    console.log(obj.age);
  }
}
log({ name: "in" });

// & typeof
const myStudent = {
  id: 1,
  name: "Kha",
  age: 22,
};

type Student = typeof myStudent;

// & keyof
type StudentKeyOf = keyof typeof myStudent;
// type StudentKeyOf = "name" | "age" | "id"
