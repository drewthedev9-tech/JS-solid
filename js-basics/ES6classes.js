// casses in JS doesnt really have classes and  are basically just syntactical sugar over
// protypical inherotance THEY ARE STILL FUNCTIONS!

// same thing as below for class.
function Circle1(radius){
    this.radius = radius;

    this.draw = function(){
        console.log('draw');
    }
}

console.log(circle = new Circle1(2)); 

// body of the class
class Circle {
    constructor(radius){
        // properties in class same as function constructor.
        this.radius = radius;
        // this method ends up in object instance not prototype.
        this.move = function(){
            console.log("move");
        }
    }

    // methods go here in the body of the class.
    // note they will end up on prototype to avoid this put them in constructor 
    // as above.
    draw(){
        console.log("draw");
    }
}

const c = new Circle(1);
console.log(c);




// Hoisting ////////////

sayHello();

// function declaration. - they are raised to 
// the top of the excecution stack. THey get hoisetd.
function sayHello(){

}

// Function Expression do not get hoisted.
const sayGoodBye = function(){

}

// class declarations are nothoisted by the v8 engine.
// This wont work!
// const c = new Circle(0);

// class Circle {

// }

// static methods ////////

class CircleStatic {
    constructor(radius){
        this.radius = radius;
    }
    // instance method
    draw(){

    }

    // static Method - are attached directly to the class not prototype.
    // used to create methods that are not tied to a specific object
    // like utility functions.
    static parse(str){
        const radius = JSON.parse(str).radius;
        new CircleStatic(radius);
    }
}

const circleOf = CircleStatic.parse('{"radius":1}');
console.log(circleOf);

// the this key word //////////////////////

// const Circle = function(){
//    this.draw = function(){
//        console.log(this);
//    } 
// }

// const c = new Circle();
// c.draw();

// Abstraction  - private members Using symbols
// const _radius = symbol();

// class CircleAb {
//     constructor(radius){
//         // radius is public.
//         this._radius = radius;
//     }
// }

// const newCircle = new CircleAb(1);

////exc - prootypical ihertance /////
function htmlElement(){

}

// exc sharing properties using object.create///////

function Persona(){
    this.talk = function(){
        console.log("I can talk");
    }
    this.teach = function(){

    }

}

const teacher = Object.create(Persona);
console.log(teacher);


// exc sharing properties to child class /w class Syntactic sugar.

class Person {
    constructor(color){
        this.color = color
        this.walk = function(){
            console.log(" niggz be walking");
        }
    }
}

const whiteMan = new Person("white");
console.log(whiteMan);

// /using extends off parent class Person to make new instance and inherit 
// from person class.
// super() calls the constructor of the class you "extened"!!!!!!
class BrowPerson extends Person{
    // constructor for brown person.
    constructor(color, name){
        // color is coming from parent class.
        super(color);
      
         this.name = name;
    }
}

const bernieBrown = new BrowPerson("brown", "bernie");
console.log(bernieBrown);

// exc using inheritance with call//////////////////////////

// passing a argument to a child fucntion to inherit in achild class.
// Class.call(this, call);
// The call() method calls a function with a given this value and arguments provided individually.
// call is a generic function you can use with any function!!!!!!
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


// creating own prototypical inheritance ".protoype" /////////////

function Shape(color){
    this.color = color;

}

// adding to the protoype of shape object
Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circlea(radius,color){
    // calls the super construtor , meaning teh this key word from shape and
    // its corresponding arg.
    Shape.call(this,color);
    this.radius = radius;
}

// adding to the protoype of circle to shape.
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function(){
    console.log("draw");
}

const s = new Shape();
const  circular = new Circlea(1,"red");
console.log(circular);
console.log(s);


// exc polymorphism /////////
// inheriting and ooveriding inheritance from parent class.
// Classes
class Game{
    constructor(game){
        this.game = game; 
        this.sport = function() {
            console.log("I love sports");
        }
    }
    
  
    
    
}
//  console.log(Game);

class cricket extends Game{
   constructor(game){
    super(game)
    // still has inherited sport function from parent.
    //    overrides parent method sports method.Just by using same naming convention.
    this.mySport = function(){
        console.log("but i also love cricket");
    }
       
}

}

const cricketGame = new cricket("cricket");
console.log(cricketGame);
