function Animal(name, species, sound) {
      return {
        name: name,
      species: species,
      sound: sound,
      speak: function () {
        console.log(
          this.sound + "! " + "I am a " + this.species + " named " + this.name,
        )
      }
    };
  }

  const array = [1,2,3,4,5];
  const [ zeroth, firsthe ] = array;

  
  // var cat = {
  //     legs: 3,
  //     name: "Harmony",
  //     color: "black",
  //     speak: speak,
  //     sound: "meow",
  //     species: "cat",
  // };
  
  // var pig = {
  //     sound: "oink",
  //     name: "Charlie",
  //     speak: speak,
  // }
  
  // var horse = {
  //     sound: "neigh",
  //     name: "Mary",
  //     speak: speak,
  // }
  
  // function speak() {
  //     console.log(this.sound + "! My name is " + this.name + "!")
  // };
  