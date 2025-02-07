// Required Packages
const inquirer = require("inquirer");
const fs = require("fs");

// Import the generateMarkdown function
const generateMarkdown = require("./generateMarkdown");

// Array of prompts for user
const questions = [
  {
    type: "input",
    message: "Please provide a title for your project:",
    name: "title",
    validate: (value) =>
      value ? true : "Please enter a title for your project.",
  },
  {
    type: "input",
    message: "Please provide a brief description of your project:",
    name: "description",
    validate: (value) =>
      value ? true : "Please enter a description for your project.",
  },
  {
    type: "input",
    message: "What technologies were used in your project?",
    name: "technologies",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide usage instructions/examples:",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide examples on how to run tests for your application:",
    name: "tests",
  },
  {
    type: "input",
    message: "Please provide any acknowledgements or credits:",
    name: "acknowledgements",
  },
  {
    type: "list",
    message: "Choose a license for your project:",
    name: "license",
    choices: [
      "MIT",
      "GNU",
      "Apache",
      "BSD",
      "Mozilla",
      "Creative Commons",
      "The Unlicense",
      "Eclipse",
    ],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
    validate: (value) => (value ? true : "Please enter your GitHub username."),
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: (value) => (value ? true : "Please enter your email address."),
  },
];

// Writes README file
function writeToFile(data) {
  if (!fs.existsSync("./output")) fs.mkdirSync("./output");
  fs.writeFile("./output/README.md", data, (error) => {
    if (error) console.error("Error writing README file:", error);
    else console.log("README file created successfully!");
  });
}

// Initializes application
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile(generateMarkdown(data)))
    .catch((error) => console.error("Error occurred while prompting:", error));
}

init();
