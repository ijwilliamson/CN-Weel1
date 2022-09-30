// Objects - Activity 1

const person = {name:"Ian",
            age:48,
            films:[],

            getFilms() {return this.films},
            getName() {return `Hello, my name is ${this.name}`}
};

console.log(person.getName());