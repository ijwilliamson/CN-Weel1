let scriptRan = false;
let scriptRunning = false;
let runTimes = 10;
let maxNumGen = 6
let numberGen = Math.floor(Math.random() * maxNumGen) + 1;
let chosenNums = [
    1,
    2,
    3
];
console.log(`scriptRan was set to ${scriptRan}`)
console.log(`scriptRunning was set to ${scriptRunning}`)
scriptRunning = true 
console.log(`scriptRunning is now set to ${scriptRunning}`)
scriptRan = true
console.log(`scriptRunning is now set to ${scriptRan}`)

// a for loop that runs the the amount of times set in the runTimes variable
for (i = 0; i < runTimes; i++){
    // changing the number generated and printing number to console
    numberGen = Math.floor(Math.random() * maxNumGen) + 1;
    console.log(`The Random Number Generated is ${numberGen}`)
    //nested for loop that checks 
    for (ng = 0; ng < chosenNums.length; ng++)

        if (chosenNums[ng] === numberGen){
            console.log("We have found a chosen number")
        }
        else {
            //console.log("print")
        }    
    console.log(`script running is set to ${scriptRunning}`)
}
console.log(scriptRan)