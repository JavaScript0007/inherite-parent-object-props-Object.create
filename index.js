function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

// instantiate new object with parent inheritance using Object.create(obj)
// this is an alternative way to let duck = new Animal- but there some disadvantages using new Animal
let duck = Object.create(Animal.prototype) // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

console.log(duck.eat()) // Should print "nom nom nom
console.log(beagle.eat()) // Should print "nom nom nom" 
