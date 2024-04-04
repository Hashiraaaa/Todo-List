#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let conditions = true;

console.log(chalk.magenta("\n\t Welcome to HashTech Coding - To-Do List\n"));

while (conditions) {
  let addTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: chalk.green("Enter your new Task : "),
      
    },
  ]);
  todoList.push(addTask.task);
  console.log(`${addTask.task} Task added in the list successfully! `);

  let addMoreTask = await inquirer.prompt([
    {
        name : "addMore",
        type : "confirm",
        message : "Do you want to add more task ? ",
        default : "False"
    }
  ])
  conditions = addMoreTask.addMore
}
console.log("Your updated Todo-List : ", todoList);