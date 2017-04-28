var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.getElementsByClassName("square");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var pickedColorDisplay = document.getElementById("goalColor");
var modeButtons = document.getElementsByClassName("mode");


init();


resetButton.addEventListener("click", function(){
	resetGame();
})

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function (){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent ==="Easy") {
			numSquares = 3;
		}
		else numSquares = 6;

		resetGame();
	})
}

for (var i = 0; i < squares.length; i++) {
	//add click listeners
	squares[i].addEventListener("click", function (){
		//get color of clicked square
		var clickedColor = this.style.background;
		//compare to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
};


function changeColors(color) {
	//loop all squares to change match winning color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	};
}


function generateRandomColors(num) {
	//make array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color
		//push to array
		arr.push(randomColor())	
	}

	//return that array
	return arr;
}

function randomColor() {
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256)
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256)
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")"
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function resetGame() {
	//change button text back to default
	resetButton.textContent = "New Colors";
	//change h1 bg back to default
	h1.style.background = "steelblue";
	messageDisplay.textContent = " ";
	//geternate all new colors
	colors = generateRandomColors(numSquares);
	//generate new random color from array
	pickedColor = pickColor();
	//update display to new color
	pickedColorDisplay.textContent = pickedColor
	//change color of squares
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

function init() {
	setupModeButtons();
	setupSquares();
	resetGame();
}


function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function (){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent ==="Easy") {
				numSquares = 3;
			}
			else numSquares = 6;

			resetGame();
		})
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++){
		//add click listeners
		squares[i].addEventListener("click", function (){
			//get color of clicked square
			var clickedColor = this.style.background;
			//compare to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			}
			else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}
}