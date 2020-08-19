// Inheritance

// protoype and prototypical inheritance
// every object in JS has a protyoe where it can inherit or get oher
// propeeties and fucntions from.



function Circle(radius){
    // instance members
    this.radius = radius;
}

// adding the draw method on the prototype of Circle
// protoype memebers
Circle.prototype.draw =function(){
    console.log("draw");
}


const circle= new Circle(12);
console.log(circle);

// iterating instance members
// object keys returns the instnaces of an object.
console.log(Object.keys(circle));

// returns both instances and prototypes.
for(let key in circle) console.log(key);

// excecise

// creating own prototypical inheritance /////////////

function Shape(color){
    this.color = color;

}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(radius,color){
    // calls the super construtor , meaning teh this key word from shape and
    // its corresponding arg.
    Shape.call(this,color);
    this.radius = radius;
}

// adding to the protoype of circle.
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function(){
    console.log("draw");
}

const s = new Shape();
const  c = new Circle(1,"red");
console.log(c);

// intermediate Function inheritance///////
// inheriting from preant or protoype


    function extend(Child, Parent){
        Child.prototype = Object.create(Parent.prototype);
        Child.prototype.constructor = Circle;
    }

    function Shape(){
        
    }
    
    // add duplicate to prototype object of shaoe
    Shape.prototype.duplicate = function(){
        console.log("duplicate");
    }

    function Circle(radius,color){bjj scout
      
    }

    // intermediate function inheritance. off the extend function.
    extend(Circle, Shape);    

    const  c = new Circle(1,"red");
    console.log(c);

// Method Overriding ///// - need to study.

polymor


// passing a argument to a child fucntion to inherit in achild class.
// Class.call(this, call);
// The call() method calls a function with a given this value and arguments provided individually.

function Player(team){
    this.team = team;
}

function SoccerPlayer(name, team){
    // inherit color from Player.
    Player.call(this,team);
    this.name = name;
}

const newPlayer = new SoccerPlayer("jobe", "red");
console.log(newPlayer);
