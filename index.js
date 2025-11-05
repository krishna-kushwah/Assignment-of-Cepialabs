let fruits = ["Apple", "orange", "Banana", "mango", "grapes"];

for (let item = 0; item < fruits.length; item++) {
  // console.log(fruits[item]);
}
// For of loop
for (item of fruits) {
  console.log(item);
}
// For in loop
let fruit = ["Apple", "orange", "Banana", "mango", "grapes"];
for (item in fruit) {
  console.log(item);
}

// map method
const myMapArr = fruits.map((curel, index, arr) => {
  return `my favrate fruit is ${index}`;
});
console.log(myMapArr);
//
// Spread Operator Example

const fruits1 = ["apple", "banana", "mango"];
const moreFruits = ["orange", "grape"];

const allFruits = [...fruits1, ...moreFruits];

console.log("All Fruits:", allFruits);

const copyFruits = [...fruits];
copyFruits.push("papaya");

console.log("Original Fruits:", fruits);
console.log("Copied Fruits:", copyFruits);

const marks = [45, 72, 88, 91, 55];
const highest = Math.max(...marks);

console.log("Marks:", marks);
console.log("Highest Marks:", highest);

// reduce method

const amount = [120, 450, 80, 300, 150];

const totalAmount = amount.reduce((sum, amount) => sum + amount, 0);

console.log("Expenses:", amount);
console.log("Total Expense:", totalAmount, "₹");

// Filter  methode
const students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 45 },
  { name: "Krishna", marks: 72 },
  { name: "Mohit", marks: 30 },
  { name: "Sneha", marks: 91 },
];

const passedStudents = students.filter((student) => student.marks >= 50);

console.log("Passed Students:");
console.log(passedStudents);
