//Arrays and Loops - Activity 6
let bobsFollowers = [
    "Mark",
    "John",
    "Malcolm",
    "Wilf"
]

let hannasFollowers = [
    "Matthew",
    "Alex",
    "John",
    "Lewis"
]

for (let i=0; i<bobsFollowers.length; i++){
    
    for(let c=0; c<hannasFollowers.length; c++){
    
        if (bobsFollowers[i] == hannasFollowers[c]){
            
            console.log(`${bobsFollowers[i]} follows both Bob and Hannah`);
    
        }
    }
}