#!/usr/bin/node
const myVar = process.argv[2];
const numVar = parseInt(myVar);
if (typeof numVar === 'number') {
  console.log('My number: ' + numVar);
} else {
  console.log('Not a number');
}
