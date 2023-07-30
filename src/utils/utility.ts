/** @format */

// & Awaited<Type>
// -> dùng để lấy kết quả của một Promise hoặc một kiểu dữ liệu bên trong Promise
// Hàm trả về một Promise sau một khoảng thời gian đã cho
function delay(milliseconds: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Awaited<Type> Thời gian đã trôi qua!");
    }, milliseconds);
  });
}

async function doAsyncTask() {
  // Sử dụng Awaited<Type> để lấy kiểu kết quả của Promise
  type ResultType = Awaited<ReturnType<typeof delay>>;

  // Kết quả của hàm delay là một Promise<string>,
  // nên ResultType sẽ là kiểu dữ liệu của chuỗi đã đợi (string)
  const result: ResultType = await delay(2000);

  console.log(result); // Output: "Thời gian đã trôi qua!"
}
doAsyncTask();

// & Partial<Type>
// -> là một loại dữ liệu dùng để tạo một phiên bản mới của một kiểu đã cho, trong đó tất cả các thuộc tính của kiểu đó trở thành tùy chọn (optional).
interface Todo {
  title: string;
  description: string;
}

// Không có Partial<Type>
function updateTodoNotPartial(todo: Todo, fieldsToUpdate: Todo) {
  return { ...todo, ...fieldsToUpdate };
}

console.log(
  updateTodoNotPartial(
    { title: "Javascript", description: "Ngôn ngữ Javascript" },
    { title: "Typescript", description: "Ngôn ngữ Typescript" }
  )
); // Output: { title: "Typescript", description: "Ngôn ngữ Typescript" }

// Có Partial<Type>
function updateTodoPartial(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
console.log(
  updateTodoPartial(
    { title: "Javascript", description: "Ngôn ngữ Javascript" },
    {}
  )
);

// & Required<Type>
// ->  là một loại dữ liệu dùng để tạo một phiên bản mới của một kiểu đã cho, trong đó tất cả các thuộc tính của kiểu đó trở thành bắt buộc (required).

interface Props {
  a?: number;
  b?: string;
}
const obj: Props = { a: 5 };
console.log(obj);
const obj2: Required<Props> = { a: 5, b: "bắt buộc" };
console.log(obj2);

// & Readonly<Type>
// ->  là một loại dữ liệu dùng để tạo một phiên bản mới của một kiểu đã cho, trong đó tất cả các thuộc tính của kiểu đó trở thành thuộc tính chỉ đọc, tức là giá trị của chúng không thể thay đổi sau khi đã được khởi tạo.

interface ReadonlyType {
  title: string;
}

const readonlyType: Readonly<ReadonlyType> = {
  title: "Delete inactive users",
};
console.log(readonlyType);
// readonlyType.title = "Hello"; // -> không thể thay đổi

// & Record<Keys, Type>
// -> là một loại dữ liệu dùng để tạo một kiểu đối tượng mới, trong đó các thuộc tính được xác định bởi các key trong một tập hợp các keys (Keys) sẽ có kiểu dữ liệu là Type.

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British" },
};

cats.boris;

// & Pick<Type, Keys>
// ->  là một loại dữ liệu dùng để tạo một kiểu mới từ một kiểu đã cho (Type), chỉ bao gồm các thuộc tính có key được xác định trong tập hợp các keys (Keys).

interface PickType {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<PickType, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
todo;

// & Omit<Type, Keys>
// ->  là một loại dữ liệu dùng để tạo một kiểu mới từ một kiểu đã cho (Type), loại bỏ đi các thuộc tính có key được xác định trong tập hợp các keys (Keys).

interface OmitType {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type OmitTypePreview = Omit<OmitType, "description">;

const omit: OmitTypePreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
omit;

// & Exclude<UnionType, ExcludedMembers>
// -> là một loại dữ liệu dùng để tạo một kiểu mới từ một union type (UnionType), loại bỏ các thành viên (members) trong tập hợp ExcludedMembers ra khỏi UnionType.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type T0 = Exclude<"a" | "b" | "c", "a">; // type T0 = "b" | "c"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // type T1 = "c"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type T2 = Exclude<string | number | (() => void), () => void>; // type T2 = string | number
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type T3 = Exclude<Shape, { kind: "circle" }>;
// type T3 = {
//   kind: "square";
//   x: number;
// } | {
//   kind: "triangle";
//   x: number;
//   y: number;
// }

// & Extract<Type, Union>
// ->  là một loại dữ liệu dùng để tạo một kiểu mới từ một union type (Union), chỉ bao gồm các thành viên (members) trong union type (Union) có kiểu dữ liệu là Type. (giao)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ExtractT0 = Extract<"a" | "b" | "c", "a" | "f">; // type ExtractT0 = "a"

// & NonNullable<Type>
// ->  là một loại dữ liệu dùng để tạo một kiểu mới từ một kiểu đã cho (Type), loại bỏ bỏ đi các giá trị null hoặc undefined từ kiểu đó.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type NonNullableT0 = NonNullable<string | number | undefined | null>;
// type NonNullableT0 = string | number
