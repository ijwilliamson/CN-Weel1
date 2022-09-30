//Arrays and Loops - Activity 3
let films = [
    "StarWars",
    "Indiana Jones",
    "Ghostbusters",
    "Alice in Wonderland"
];
for (i=0; i<films.length; i++){
    if (i==2){
        console.log(`${films[i]} - ${isGhostbusters(films[i])}` );
    }
    else{
        console.log(films[i]);
    }
}

function isGhostbusters(film)
{
    if (film == "Ghostbusters")
    {
        return "Yay it's Ghostbusters"
    }
    else
    {
        return "Boo! we wanted Ghostbusters"
    }
}
