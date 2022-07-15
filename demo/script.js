const students = [
  {
    name: "Keshav",
    age: 21,
  },
  {
    name: "Kain",
    age: 77,
  },
  {
    name: "Pavi",
    age: 43,
  },
  {
    name: "Abhi",
    age: 11,
  },
  {
    name: "Vishal",
    age: 99,
  },
  {
    name: "John",
    age: 69,
  },
];

// const num = [1, 2, 3, 4];

// console.log(num.reduce((a, b) => a * b));

// const result = students
//   .filter((stu) => stu.name.startsWith("K"))
//   .map((stu) => stu.age);

// console.log(result);

console.log(students.map((stu) => stu.age).reduce((a, b) => a + b));
