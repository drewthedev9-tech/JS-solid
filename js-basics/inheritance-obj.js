// Inheritance - great way to avoid code reusability.
// in small projects kep it simple and stupid.

// protoype and prototypical inheritance
// every object in JS has a protyoe where it can inherit or get oher
// propeeties and fucntions from.

//  4 ways to create objects and inheritance in JS
// Object as literal
// Constructor Invocation Pattern
// The create() method
// Using class after ES6



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


    // function extend(Child, Parent){
    //     Child.prototype = Object.create(Parent.prototype);
    //     Child.prototype.constructor = Circle;
    // }

    // function Shape(){
        
    // }
    
    // // add duplicate to prototype object of shaoe
    // Shape.prototype.duplicate = function(){
    //     console.log("duplicate");
    // }

    // function Circle(radius,color){
      
    // }

    // // intermediate function inheritance. off the extend function.
    // extend(Circle, Shape);    

    // const  c = new Circle(1,"red");
    // console.log(c);

// Method Overriding ///// - need to study.

// polymorphism///////////// - It provides an ability to call the 
// same method on different JavaScript objects.

// function extend(Child, Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Circle;
// }

// function Shape(){
    
// }

// // add duplicate to prototype object of shaoe
// Circle.prototype.duplicate = function(){
//     console.log("duplicate");
// }

// function Circle(radius,color){
  
// }

// // intermediate function inheritance. off the extend function and key word.///////
// extend(Circle, Shape); 

// function Square(){

// }

// extend(Square,shape);

// Square.prototype.duplicate = function(){
//     console.log("Duplicate square");
// }

// // array of the shape instances above.
// const shapes = [
//     new Circle(),
//     new Square()
// ];

// // loop through teh array of objects
// for(let shape of shapes)
//     shape.duplicate();


// mixins help deal woth over the top complex hierarchies of OOP.
// they do compositional programming.

// mixin
// ...rest operator tunrs all arguments into a single array.
// function mixin(target, ...sources){
//     Object.assign(target,...sources);
// }

// features
const canEat={
    eat: function(){
        this.hunger;
        console.log('eating');
    }
};


const canWalk = {
    walk: function(){
        console.log('eating')
    }
};

const canSwim = {
    swim: function(){
        console.log('swim')
    }
}



function Person(){

}

//using assign with Person.protoype as the place to share properties.
Object.assign(Person.prototype,canEat,canWalk);
const person= new Person();// canEat, canWalk will be in the Person.protoype.
// new ES6 to copy the properties from one object to another.
// arguments -> empty object to put properties into. canEat, canWalk.
// const person = Object.assign({},canEat,canWalk);
console.log(person);

// making a goldfish object to inherit the feature swim above.
function Goldfish(){

}

Object.assign(Goldfish.prototype,canEat,canSwim);
const goldfish = new Goldfish();
console.log(goldfish);

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


