#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string[] = [];
let conditions = true;

console.log(
  chalk.bold.magenta(`\n \t\t <<<=====================================>>>`)
);
console.log(
  chalk.bold.magenta(
    "\n<<<===========>>> Welcome to HashTech Coding - To-Do List <<<===========>>>"
  )
);
console.log(
  chalk.bold.magenta(`\n \t\t <<<=====================================>>>`)
);

// while (conditions) {
//   let addTask = await inquirer.prompt([
//     {
//       name: "task",
//       type: "input",
//       message: chalk.green("Enter your new Task : "),

//     },
//   ]);
//   todoList.push(addTask.task);
//   console.log(`${addTask.task} Task added in the list successfully! `);

//   let addMoreTask = await inquirer.prompt([
//     {
//         name : "addMore",
//         type : "confirm",
//         message : "Do you want to add more task ? ",
//         default : "False"
//     }
//   ])
//   conditions = addMoreTask.addMore
// }
// console.log("Your updated Todo-List : ", todoList);

let main = async () => {
  while (conditions) {
    let option = await inquirer.prompt({
      name: "choice",
      type: "list",
      message: "\nSelect an option you want to do: ",
      choices: [
        "Add Task",
        "Update Task",
        "Delete Task",
        "View To-Do List",
        "Exit",
      ],
    });
    if (option.choice === "Add Task") {
      await addTask();
    } 
    else if (option.choice === "View To-Do List") {
      await viewTask();
    }
    else if (option.choice === "Exit") {
      conditions = false;
    }
    else if (option.choice === "Delete Task"){
      await deleteTask();
    }
    else if (option.choice === "Update Task"){
      await updateTask(); 
    }
  }
};

let addTask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      message: "Enter your new task: ",
      type: "input",
    },
  ]);
  todoList.push(newTask.task);
  console.log(`\n ${newTask.task} task added successfully in To-Do List`);
};

//Function to view all tasks in list
let viewTask = async () => {
  console.log("\nYour To-Do List: \n");
  todoList.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`);
  });
}

//function to delete a task 
let deleteTask = async () => {
  await viewTask();
  let delQ = await inquirer.prompt([
    {
      name: "deltask",
      message: "Enter the 'index no.' of the task you want to delete: ",
      type: "number"
    }
  ]);

  let delelteTask = todoList.splice(delQ.deltask - 1 , 1);
  console.log(`\nTask at no. ${delQ.deltask} has been deleted from your To-Do List`); 
}



let updateTask = async () =>{
  await viewTask();
  let updateTaskIndex = await inquirer.prompt([
    {
      name : "upd",
      type : "number",
      message: "Enter the 'index no.' of the tast you want to update : " 
    },
    {
      name : "updNew",
      type: "input",
      message: "Now enter your updated task : ",
    }
  ]);
  todoList[updateTaskIndex.upd - 1] = updateTaskIndex.updNew;
  console.log(`\n Task at index no. ${updateTaskIndex.upd} updated successfully. [For updated list, check option "View Todo List]`);
}
main();