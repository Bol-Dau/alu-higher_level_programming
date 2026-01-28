#!/usr/bin/node
const myObj = {
  type: 'object',
  value: 12
};

// Print the initial state
console.log(myObj);

// Update the value using the first command line argument
if (process.argv[2] !== undefined) {
  myObj.value = parseInt(process.argv[2]);
} else {
  // If no argument is passed, we manually set it to 89 to match your requirement
  myObj.value = 89;
}

// Print the modified state
console.log(myObj);
