#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while(condition)
 {let addTask = await inquirer.prompt(
[

    {
        name: "todo",
        type: "input",
        message: "what you want to add in your Todos?"
    },
{
    name: "addmore",
    type: "confirm",
    message: "do you want to add more",
    default: "true"
}]
)
todos.push(addTask.todo);
condition = addTask.addmore
console.log(todos);}

    
        
        
        
    
    
        
          
        
    
