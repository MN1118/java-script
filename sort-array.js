const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

function displayArray(arr) {
  console.log("Array: " + arr.join(", "));
}

function sortArray(arr) {
  arr.sort((a, b) => a - b);
  console.log("Array sorted in ascending order.");
}

function reverseArray(arr) {
  arr.reverse();
  console.log("Array reversed.");
}

function menu() {
  console.log("\nMenu:");
  console.log("1. Display Array");
  console.log("2. Sort Array");
  console.log("3. Reverse Array");
  console.log("4. Exit");

  rl.question("Enter your choice (1-4): ", function (choice) {
    switch (choice) {
      case "1":
        displayArray(array);
        break;
      case "2":
        sortArray(array);
        displayArray(array);
        break;
      case "3":
        reverseArray(array);
        displayArray(array);
        break;
      case "4":
        console.log("Exiting program.");
        rl.close();
        return;
      default:
        console.log("Invalid choice, please try again.");
    }
    menu();
  });
}

menu();
