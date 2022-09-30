//Variables - Activity 1
//Activity 4: Create Naughts and Crosses board.

const horLine = "------------";
const verLine = "   |   |   ";

//Use a multi dimensional array to represent the board.
let spaces = [
    ["X", "O", " "],
    ["X", "X", " "],
    ["O", " ", " "]
];

//loop through each row to build the board.
let rowCounter = 0;
spaces.forEach(element => {
        rowCounter++
        console.log(verLine);
        console.log(` ${element[0]} | ${element[1]} | ${element[2]} `);
        console.log(verLine);
        
        if (rowCounter < 3) {console.log(horLine);}
    });



