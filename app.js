var numSquares = 6 //stoes number of squares available in gme per the mode
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 0, 255)",
    "rgb(255, 225, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 0)"
] //contains random 6 or 3 RGB color code generated every time game is reset or mode is changed
var pickedColor //color/option block selected by user
var squares = document.querySelectorAll(".square") //array of squares on page
var resetButton = document.querySelector("#reset") //new game button
var modeButtons = document.querySelectorAll(".mode") //an array which has easy and hard mode buttons

console.log('squares', squares)

for (let i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = colors[i]

}