const gameContainer = document.getElementById("game");
let firstCard = "";
let secondCard = "";
let clickCount = 0;
let pause = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(e) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  //flag to stop the event listener from firing
  if (pause === true) {
    return;
  }

  clickCount++;

  let currentCard = e.target;
  currentCard.style.backgroundColor = currentCard.classList;
  currentCard.removeEventListener("click", handleCardClick);

  if (clickCount === 1) {
    firstCard = currentCard;
    return;
  }

  if (clickCount === 2) {
    //clickCount2 bracket
    pause = true;
    secondCard = currentCard;

    if (firstCard.style.backgroundColor == secondCard.style.backgroundColor) {
      clickCount = 0;
      pause = false;
      return;
    } else {
      setTimeout(function () {
        firstCard.style.backgroundColor = "";
        secondCard.style.backgroundColor = "";
        firstCard.addEventListener("click", handleCardClick);
        secondCard.addEventListener("click", handleCardClick);
        clickCount = 0;
        pause = false;
        return;
      }, 1000);
    }
    return;
  } //end of clickCount2 bracket
} // handleCardClick function's ending bracket

// when the DOM loads
createDivsForColors(shuffledColors);

/* */
