//  Arrays and Loops - Activity 7

//  While loops only run if the condition is true
//  They are good for ensuring a block of code is only executed if a condition is true

//  Do While loops run before checking the condition and only run the second time if the condition is true
//  They are useful when a block of code must always be run once and only repeated if a condition is true

console.log("Get ready to set your watch when the current second reaches 0");

let second = new Date().getSeconds();
let count = 0;

//  Get the current second and loop until zero seconds is reached. 
//  Note, if the program is executed on zero seconds it will ignore that one.

do{
   
    while(second == new Date().getSeconds())
    {
        //  Wait here for the next second
    }
    
    second = new Date().getSeconds();
    console.log(`current second is: ${second}`);

    //  Count is a backup in case the 00 second is missed and will automatically end after 1 minute
    count++;

} while(second != 0 && count <= 60)

    //  Check if the do loop exited due to count exceeding 60 indicating an error.
    if (count <=60){
        let stopDate = new Date();
    console.log(`Set your watch now for accurate seconds to:- ${stopDate.getHours()}:${stopDate.getMinutes()}`)
    }
    else
    {
        console.log("something went wrong with the timer, try again");
    }
    


