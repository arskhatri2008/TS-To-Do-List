import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTasks = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your todos?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false",
        },
    ]);
    todos.push(addTasks.todo);
    console.log(todos);
    condition = addTasks.addmore;
}
