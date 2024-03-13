var cat = {
    legs: 3,
    name: "Harmony",
    color: "black",
    speak: speak,
    sound: "meow",
    species: "cat",
};

var pig = {
    sound: "oink",
    name: "Charlie",
    speak: speak,
}

var horse = {
    sound: "neigh",
    name: "Mary",
    speak: speak,
}

function speak() {
    console.log(this.sound + "! My name is " + this.name + "!")
};
