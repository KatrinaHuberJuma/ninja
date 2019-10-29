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

    this.punch = function(foe){
        if (foe instanceof Ninja){
            foe.health -=5;
            console.log(this.name + " has punched " + foe.name)
        } else {
            console.log("Come on " + this.name + ", you can't punch " + (typeof foe) + "s!")
        }
        
        return this;
    }

    this.kick = function(foe){
        if (foe instanceof Ninja){
            foe.showStats()
            var damage = 15 * this.health
            foe.health -= damage;
            console.log(this.name + " has kicked " + foe.name + ", who has now sustained damage of " + damage );
        } else {
            console.log("Come on " + this.name + ", you can't kick " + (typeof foe) + "s!")
        }
        return this;
    }


}
var kat = new Ninja("Kat", 23);
var joe = new Ninja("Joe", 23);
kat.punch("hey")
joe.kick({boop:"beep"})
joe.sayName().showStats().drinkShake().showStats().punch(kat);
kat.showStats().kick(joe).showStats();
joe.showStats()
