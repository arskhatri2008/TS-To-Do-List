import inquirer from "inquirer";
let todos = [];
let questions = inquirer.prompt([
    {
        name: "todo",
        type: "input",
        message: "What you want to add in your todos?",
    },
    {
        name: "addmore",
        type: "confirm",
        message: "Do you want to add more?",
    }
]);
