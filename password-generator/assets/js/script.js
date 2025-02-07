// Default character length for password generation
let characterLength = 8;

// Array to store the characters based on user's choice
let choiceArray = [];

// Arrays containing different sets of characters for password generation
const upArray = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];
const lowArray = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symArray = [
    "!", "@", "$", "%", "^", "&", "*", "(", ")", "?", "+", "=", "-", ",", "~", ";", ":",
];

// Selecting the "Generate Password" button and adding an event listener
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Selecting the "Theme Toggle" button and adding an event listener
const themeToggleBtn = document.querySelector("#theme-toggle");
themeToggleBtn.addEventListener("click", toggleTheme);

// Function to handle the "Generate Password" button click event
function writePassword() {
    // Gather user prompts and validate input
    const correctPrompts = getPrompts();
    const passwordText = document.querySelector("#password");

    // Generate and display password if prompts are correct, otherwise clear the field
    if (correctPrompts) {
        const password = generatePassword();
        passwordText.value = password;
    } else {
        passwordText.value = "";
    }
}

// Function to generate a password based on selected criteria
function generatePassword() {
    let generatedPassword = "";
    for (let i = 0; i < characterLength; i++) {
        const randomIndex = Math.floor(Math.random() * choiceArray.length);
        generatedPassword += choiceArray[randomIndex];
    }
    return generatedPassword;
}

function getPrompts() {
    choiceArray = [];

    // Prompt user for character length
    let input = prompt(
        "Please choose the length of the password (between 8 - 64 characters):"
    );

    // Validate input
    if (!input) {
        alert("Invalid input. Please enter a valid password length.");
        return false;
    }

    // Parse the input to an integer
    characterLength = parseInt(input);

    // Validate character length
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 64) {
        alert("Character length must be between 8 and 64.");
        return false;
    }

    // Prompt user for password criteria and update choiceArray accordingly
    if (confirm("Would you like your password to contain uppercase letters?")) {
        choiceArray = choiceArray.concat(upArray);
    }
    if (confirm("Would you like your password to contain lowercase letters?")) {
        choiceArray = choiceArray.concat(lowArray);
    }
    if (confirm("Would you like your password to contain numbers?")) {
        choiceArray = choiceArray.concat(numArray);
    }
    if (confirm("Would you like your password to contain special characters?")) {
        choiceArray = choiceArray.concat(symArray);
    }
    return true;
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}