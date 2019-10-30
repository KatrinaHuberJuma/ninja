class Ninja {
    constructor(name) {
        this.name = name;
        this.speed = 3;
        this.strength = 3;
        this.health = 100;
    }
    // prototype method
    sayName() {
        console.log(`Ninja: ${this.name}`);
        return this;
    }

    showStats() {
        console.log(this.constructor.name + this.name + ", Strength: " + this.strength + ", Speed " + this.speed + ", Health: " + this.health)
        return this;
    }
    drinkShake() {
        this.health+=10;
        return this;
    }
    
} 

var joe = new Ninja("Joe");
joe.sayName().showStats().drinkShake().showStats()



// ================================================================================

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
        this.health = 200;

    }
    // simple function in the child class
    speakWisdom() {
        super.drinkShake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }
}
const kat = new Sensei("kat");
kat.showStats().speakWisdom().showStats()