// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

var n1 = Math.round(Math.random() * 100);
const numbox1 = document.getElementById("number1");

var n2 = Math.round(Math.random() * 100);
const numbox2 = document.getElementById("number2");

// Iteration 3: Creating variables required to make the game functional
var operator;
var score = 0;
const add = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("mul");
const divide = document.getElementById("divide");
const modulus = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var numbox3 = document.getElementById("number3");
var n3;

// Iteration 5: Creating a randomise function to make the game functional and call the function randomise
function randomise() {
  n1 = Math.round(Math.random() * 100);
  n2 = Math.round(Math.random() * 100);

  if (n1 < n2) {
    var extra = n1;
    n1 = n2;
    n2 = extra;
  }

  operator = Math.round(Math.random() * 5);
  switch (operator) {
    case 1:
      n3 = n1 + n2;
      break;

    case 2:
      n3 = n1 - n2;
      break;

    case 3:
      n3 = n1 * n2;
      break;

    case 4:
      n3 = Math.floor(n1 / n2);
      break;

    case 5:
      n3 = n1 % n2;
      break;

    case 0:
      randomise();
  }

  numbox1.innerHTML = n1;
  numbox2.innerHTML = n2;
  numbox3.innerHTML = n3;

  console.log(n1 + " " + n2 + " " + n3 + " " + operator);
}

randomise();

// Iteration 6: Making the Operators (button) functional
add.onclick = () => {
  if (n1 + n2 === n3) {
    score++;
    randomise();
    resetTime(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

minus.onclick = () => {
  if (n1 - n2 === n3) {
    score++;
    randomise();
    resetTime(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

multiply.onclick = () => {
  if (n1 * n2 === n3) {
    score++;
    randomise();
    resetTime(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

divide.onclick = () => {
  if (Math.floor(n1 / n2) === n3) {
    score++;
    randomise();
    resetTime(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

modulus.onclick = () => {
  if (n1 % n2 === n3) {
    score++;
    randomise();
    resetTime(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
};

// Iteration 7: Making Timer functional
var time = 20;
var timerId;

function startTimer() {
  time = 20;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) location.href = "./gameover.html?score=" + score;
    timer.innerHTML = time;
  }, 1000);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();
