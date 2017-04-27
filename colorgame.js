var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var pickedColorDisplay = document.getElementById("goalColor");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn")


pickedColorDisplay.textContent = pickedColor;



resetButton.addEventListener("click", function(){
	//change button text back to default
	resetButton.textContent = "New Colors";
	//change h1 bg back to default
	h1.style.background = "#232323";
	//geternate all new colors
	colors = generateRandomColors(6);
	//generate new random color from array
	pickedColor = pickColor();
	//update display to new color
	pickedColorDisplay.textContent = pickedColor
	//change color of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
})


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected")

	//generate new colors
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	pickedColorDisplay.textContent = pickedColor

	//hide bottom 3 divs
	for(i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}

})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected")

		//generate new colors
		colors = generateRandomColors(3);
		pickedColor = pickColor();
		pickedColorDisplay.textContent = pickedColor

	//show bottom 3 divs
	for(i = 3; i < squares.length; i++){
		squares[i].style.display = "block";
	}
})


for (var i = 0; i < squares.length; i++) {
	//add initial colors
	squares[i].style.background = colors[i];

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