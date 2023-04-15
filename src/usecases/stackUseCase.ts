import { exit } from "process";
import { Stack } from "../structures/stack";
import promptSync = require("prompt-sync");

const stack = new Stack(5);

const prompt = promptSync();
console.log("Stack has been initialized with size of 5.");

while (1) {
  console.log("1. Push");
  console.log("2. Pop");
  console.log("3. Peek");
  console.log("4. Get Stack");
  console.log("0. Exit");

  let procedure = prompt("Enter the procedure number: ");

  if (procedure == '0') {
    exit();
  }

  switch (JSON.parse(procedure)) {
    case 1:

      try {
        let number = prompt("Enter the value to be inserted: ");
        stack.push(JSON.parse(number));
      }
      catch (err) {
        console.log(err);
      }
      break;

    case 2:
      try {
        stack.pop();
      }
      catch (err) {
        console.log(err);
      }
      break;

    case 3:
      try {
        let position = prompt("Enter the position you want to Peek: ");
        let value = stack.peek(JSON.parse(position));
        console.log(value);
      }
      catch (err) {
        console.log(err);
      }
      break;

    case 4:
      let array = stack.getStack();
      console.log(JSON.stringify(array));

    default:
      break;
  }
}
