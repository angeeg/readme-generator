// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project to the user."
    },
    {
        type: "input",
        name: "installation",
        message: "How does the user install your application?"
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe how to use your application."
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter the project contributor's github username."
    },
    {
        type: "input",
        name: "test",
        message: "Explain how to test your application."
    },
    {
        type: "list",
        name: "license",
        message: "Select which lisence you have for your application.",
        choices: ["BSD_3", "GPL_3.0", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username."
    }
 
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) throw err
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        writeToFile("README.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
