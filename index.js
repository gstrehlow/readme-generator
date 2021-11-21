// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project.',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?',
            validate: installationInput => {
                if(installationInput) {
                    return true;
                } else {
                    console.log('Please provide a step-by-step description of how to get the development environment running.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use/run your project?',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions and examples for use');
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select which licenses are used.',
            choices: ['MIT', 'GNU', 'None']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please enter contributors (if any).'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can the user test this project?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username.',
            validate: usernameInput => {
                if(usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address for additional user questions.',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.')
                }
            }
        }
    ]).then(data => {
        console.log(data);
    })
}
questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
