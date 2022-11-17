
// Generate Random number for dice

function createRandomNumber(){
    let number = Math.ceil(Math.random() * 6);
    return number;
}

// Player 1

let randomNumber1 = createRandomNumber();

const imageOne = "images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",imageOne);

// Player 2

let randomNumber2 = createRandomNumber();

const imageTwo = "images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src",imageTwo);

// Change heading based on player score.

var winLabel= "";
if(randomNumber1 === randomNumber2)
    winLabel = "Draw🤝";
else if (randomNumber1 > randomNumber2)
    winLabel = "Player 1 Win 🚩";
else if(randomNumber1 < randomNumber2)
    winLabel = "Player 2 Win 🚩";
else
    winLabel = "Refresh Me";
document.querySelector('h1').textContent=winLabel;
