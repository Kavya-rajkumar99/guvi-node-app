// console.log(global)
console.log(process.argv)
const sum = (a,b) => a + b;
const [, ,num1,num2] = process.argv;
console.log(sum(+num1,+num2))