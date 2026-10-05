let firstName = "Jane";
let lastName = "Doe";
let birthYear = 1990;
let isLoggedIn = true;
function createUserProfile(userbirthYear, userName) {
  const age = 2025 - userbirthYear; 
  const profileSummary = `Welcome, ${userName}! You are ${age} years old.`;
  return profileSummary;
}
let fullName = firstName + " " + lastName;
let userMessage = createUserProfile(birthYear, fullName);
console.log(userMessage);
console.log(isLoggedIn ? "Status: Online" : "Status: Offline");