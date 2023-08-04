// Variable to store the username
let username = "";

// Function called when the "Login" button is clicked
function login() {
  const input = document.getElementById("username");
  const welcomeMessage = document.getElementById("welcome-message");
  const homeDiv = document.getElementById("home");
  const gameDiv = document.getElementById("game");

  const usernameValue = input.value.trim();

  if (usernameValue !== "") {
    // Set the username and update the welcome message
    username = usernameValue;
    welcomeMessage.innerText = `Welcome, ${username}!`;

    // Hide the home screen and show the game screen
    homeDiv.style.display = "none";
    gameDiv.style.display = "block";
  } else {
    // Display an alert if the username is empty
    alert("Please enter a username.");
  }
}

// Function called when a game option (Rock, Paper, Scissors) is clicked
function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  const resultDiv = document.getElementById("result");
  let resultText = "";

  if (userChoice === computerChoice) {
    resultText = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText = "You win!";
  } else {
    resultText = "Computer wins!";
  }

  // Display the game result
  resultDiv.innerText = resultText;
}

// Function called when the "Go Back" button is clicked
function goBack() {
  const homeDiv = document.getElementById("home");
  const gameDiv = document.getElementById("game");
  const input = document.getElementById("username");

  // Show the home screen and hide the game screen
  homeDiv.style.display = "block";
  gameDiv.style.display = "none";

  // Clear the username input field
  input.value = "";
}

// Function called when the "Quit" button is clicked
function quitGame() {
  const resultDiv = document.getElementById("result");
  const input = document.getElementById("username");

  // Clear the game result and username input field
  resultDiv.innerText = "";
  input.value = "";

  // Call the goBack() function to show the home screen
  goBack();
}
