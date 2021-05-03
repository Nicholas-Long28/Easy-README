// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateREADME = require('./utils/generateReadme');
const writeFileAsync = util.promisify(fs.writeFile);
const path = require('path');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your App?',
        },
        {
            type: 'input',
            name: 'Github',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'use',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT License', 'GPL License', 'Apache License', 'GNU License', 'N/A']
        }
    ]);
}
    // TODO: Create a function to write README file

// TODO: Create a function to initialize app
    async function init() {
        try {
            const answers = await promptUser();
            const generateContent = generateREADME(answers);
            await writeFileAsync('./dust/README.md', generateContent);
            console.log('Successfully wrote to README.md');
        } catch(err) {
            console.log(err);
        }
}

// Function call to initialize app
/*const init = () => {
    promptUser()
    .then((answers) => writeFileAsync('Readme.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};
*/
init();
