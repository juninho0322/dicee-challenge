//alert("GOOD LUCK!");



/*-----------------------   DICE NUMBER 0  --------------------------------*/

// GETTING A RANDON NUMBER BETWEEN 1 TO 6, MATH.FLOOR ROUNDING DOWN TO A WHOLE NUMBER, + 1 BECAUSE START FROM 0, TO GET 1 TO 6, USE +1
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1 ; 


// GETTING THE VAR RANDON NUMBER AND CONCTANATE WITH THE FILE NAME TO GET A RANDON IMAGE   DICE1.PNG TO DICE6.PNG
var randomDiceImage1 = "dice" + randomNumber1 + ".png";

// VARIBABLE TO GET A RANDOM IMAGE ON FOLDER IMAGES
var randomImageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

/*-----------------------   DICE NUMBER 1  --------------------------------*/

var randomNumber2 = Math.floor(Math.random() * 6) + 1;


// SAME THING IN ONLY ONE LINE OF CODE

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

//var randonDiceImage2 = "dice" + randomNumber2 + ".png";
//var randomImageSource2 = "images/" + randonDiceImage2;




// SAME THING IN ONLY ONE LINE OF CODE

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

//var image2 = document.querySelectorAll("img")[1];
//image2.setAttribute("src", randomImageSource2);

// IF PLAYER 1 WINS
if(randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "Play 1 WINS!!!!";


// IF PLAYER 2 WINS
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Play 2 WINS!!!!";
}

// ELSE DRAW
 else {
document.querySelector("h1").innerHTML = "DRAW";

 }


 document.querySelector(".result1").innerHTML = randomNumber1;
 document.querySelector(".result2").innerHTML = randomNumber2;





 