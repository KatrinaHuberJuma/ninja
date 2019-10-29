function Ninja(name) {
    // create a private variable that stores a reference to the new object we create
    var self = this;
    var speed = 3;
    var strength = 3;
    
    this.name = name;
    this.health = 100;
    this.sayName = function() {
        console.log("Hello my name is " + this.name);
        return this;
    }
    this.showStats = function() {
        console.log("name: " + this.name + ", health: " + this.health + ", strength: " + speed + ", speed: " + strength);
        return this;
    }
    this.drinkShake = function() {
        this.health+=10;
        return this;
    }
}
var joe = new Ninja("Joe", 23);
joe.sayName().showStats().drinkShake().showStats();
