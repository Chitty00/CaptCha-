// here to create the id and class to call from thr html and to create the new var and decalre the var

let captchaText = document.getElementById("captcha");
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";

let userText = document.getElementById("textBox");
let submitButton = document.getElementById("submitButton");
let output = document.getElementById("output");
let refreshButton = document.getElementById("refreshButton");

//to generate the captcha text, i need to pick the random charatcers like alphaNums and special characters to create new var and declare the array and in that array dump the some characters

var captchaStr = "";
let alphaNums = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "@",
  "!",
  "&",
];

// write the function to generate a new captcha when page loads the captcha will create immediately and refresh it and generate new captcha
// a new array from random characters in alphaNums limit of characters 5

function generate_captcha() {
  let emptyArr = [];

  for (let i = 1; i <= 3; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
  }

  captchaStr = emptyArr.join("");

  ctx.clearRect(0, 0, captchaText.width, captchaText.height);
  ctx.fillText(captchaStr, captchaText.width / 4, captchaText.height / 2);

  output.innerHTML = "";
}

generate_captcha();

// the function clears the canvas and resets any output both of which are important for refreshi ng the captcha text
// when complete the functionality and enter the captcha after it will be same captcha or not it check once

function check_captcha() {
  if (userText.value === captchaStr) {
    output.className = "correctCaptcha";
    output.innerHTML = "Correct!";
  } else {
    output.className = "incorrectCaptcha";
    output.innerHTML = "Incorrect, please try again!";
  }
}

// call the response when click the enter key  submit button

userText.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    check_captcha();
  }
});

submitButton.addEventListener("click", check_captcha);

// refresh

refreshButton.addEventListener("click", generate_captcha);
