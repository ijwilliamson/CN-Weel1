// Array Activity 2

let rNumbers = [];

//fill the array with 100 random numbers from 0 - 1000
for (let i=0;i<100;i++){
    rNumbers.push(Math.floor(Math.random()*1000));
}

console.log("100 Random Numbers");
console.log(rNumbers);
console.log("-".repeat(50));


// filter the numbers adding only those which are prime to the new array
let primeNumbers = rNumbers.filter((element) => isPrime(element))
console.log("The filtered Numbers which are Prime");
console.log(primeNumbers);


// check if the number is prime returning a bool value
function isPrime(number){
    if (number <= 1) return false;
    if (number == 2)  return true;
    if (number % 2 == 0)  return false;
    
    for(i=3;i<number;i+=2){
        if (number%i == 0)  return false;
    }
    return true;
}
