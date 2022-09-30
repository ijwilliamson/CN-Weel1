//Arrays and Loops - Activity 5
let rNumbers = [];

for (let i=0;i<6;i++){
    rNumbers.push(Math.floor(Math.random()*30))
}

for (let i=0; i<rNumbers.length; i++)
{
    if (rNumbers[i]%7){
        console.log(`${rNumbers[i]} is not divisible by 7`);
    }
    else
    {
        console.log(`${rNumbers[i]} is divisible by 7`);
    }
}