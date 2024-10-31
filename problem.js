/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

//code is down here vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

let password= "Monkey"
let userInput= "monkey"

//first create/name function

function passwordCheck(password, userInput)
//set paramiters as password and users input to compare the input to the password
if (userInput === password) {
    console.log ("Access Granted!") //if user input is equal to password, access is granted
} else {
    console.log ("Access Denied!") //if user inputs anything not equal to the password, access is denied
}

if (userInput === "forgot") { //if user input is equal to forgot, displays hint
    console.log ("Here is a hint") }

if (userInput === "reset") { //if user input is equal to reset, displays reset options
    console.log("Let's reset your account")
}

//i tried my best happy halloween!!!

