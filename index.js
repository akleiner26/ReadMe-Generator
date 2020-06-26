var fs = require("fs");
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
    inquirer
        .prompt([
            {
                type: "input",
                message:  "What is the title of your project?",
                name: "title"
            },
            {
                type: "input",
                message: "Please enter a brief description of your project",
                name: "description"
            },
            {
                type: "input",
                message: "Please enter any notes necessary for installation",
                name: "installation"
            },
            {
                type: "input",
                message: "Please enter your GitHub Username",
                name: "username"
            },
            {
                type: "input",
                message: "Please enter your GitHub repo address",
                name: "repo"
            },
            {
                type: "checkbox",
                message: "Please choose applicable licenses",
                name: "license",
                choices: ["MIT", "Apache", "BSD", "GNU"]
            },
            {
                type: "input",
                message: "Please describe applicable usage",
                name: "usage"
            },
            {
                type: "input",
                message: "Please list contributors",
                name: "Contributors"
            },
            {
                type: "input",
                message: "What tests are involved in running this application?",
                name: "test"
            },
            {
                type: "input",
                message: "What questions arose while creating this?",
                name: "questions"
            }
        ])

    .then(function (response) {
        fs.writeFile("newReadMe.md", generateMarkdown(response), function (err) {
            if (err) {
                return console.log(err);
            }
            
        })
    })
