//Objects - Activity 2

let pet = {
    name: "Pumkin",
    typeofPet: "cat",
    age: 7,
    color: "ginger",

    eat() {
        return `${this.name} is eating`
    },

    drink() {
        return `${this.name} is drinking`
    }

}

console.clear();
console.log(pet.drink());
console.log(pet.eat());