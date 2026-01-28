#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const todos = JSON.parse(body);
    const completed = {};

    todos.forEach((todo) => {
      if (todo.completed) {
        if (completed[todo.userId] === undefined) {
          completed[todo.userId] = 1;
        } else {
          completed[todo.userId]++;
        }
      }
    });
    console.log(completed);
  }
});
