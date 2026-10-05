
/*First, create variables to hold the user's information. 
Create a variable named firstName and assign it a string value (e.g., "Jane"). 
Create a variable named lastName and assign it a string value (e.g., "Doe"). 
Create a variable named birthYear and assign it a number value (e.g., 1990). 
Create a variable named isLoggedIn and assign it a boolean value (e.g., true).*/

let firstName = "Jane";
let lastName = "Doe";
let birthYear = 1990;
let isLoggedIn = true;

//Define a function named createUserProfile.This function should accept two parameters: userBirthYear and userName.

function createUserProfile(userbirthYear, userName) {
  const age = 2025 - userbirthYear; 
  const profileSummary = `Welcome, ${userName}! You are ${age} years old.`;
  return profileSummary;
}
let fullName = firstName + " " + lastName;
let userMessage = createUserProfile(birthYear, fullName);
console.log(userMessage);

//Final part (Using a Boolean Operator)that uses the ternary operator
console.log(isLoggedIn ? "Status: Online" : "Status: Offline");
