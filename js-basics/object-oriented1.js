// object literals syntax {}

// const circle ={
//     radius: 1,
//     location: {
//         x:1,
//         y:1
//     },
//    draw: function(){
//     console.log(" draw circle");
//    }
        
// };

// avoid DRY ///
// factory function
// function createCirlce(radius){
//     return circle ={
//             radius: radius,
           
//            draw: function(){
//             console.log(" draw circle");
//            }
                
//         };
// }

// creates a new circle object
// const circle = createCirlce(1);

// constructors 

function Circle(radius){
        this.radius = radius;
        this.draw = function(){
                console.log("draw");
        }
}

// new  operator ceates a new empty object pointing to this in this  new object.
// return that object from the costructor above.
const another = new Circle(1)
console.log(another);

// every object has a construcor property to create that object.

// functions a realso objects

// prmitives are copied by their value

// objects are copied by their refernce.


// adding properties to this object - van do without changing the inital class
// in java snd c# you cant do this
function Circle2(radius){
        this.radius = radius;
        this.draw = function(){
                console.log("draw");
        }
}


 const anotherCircle = new Circle2(10);
 console.log(anotherCircle);

// dot notation to add a property.
 Circle2.location = {x:1};

// using bracket notaion to access a property by string
// const propertyName = 'center location'
// circle[propertyName] = {x:1};

// enumerting and iterating over an object.

for (let key in anotherCircle){
        // if we dont want keys in theobject tha are
        // values
        if(typeof anotherCircle[key] !== 'function')
       console.log(key,anotherCircle[key]);
} // radius 10

// gets the keys in object
const keys = Object.keys(anotherCircle);
console.log(keys);

// checks to see if a property is in object.
if ('radius' in anotherCircle)
 console.log('Circle has a radius');


// abstraction /////////  hide the detils and show the essentials.

function CircleAb(radius){
        this.radius = radius;
        // want to hide defaultlocation & computeoptimumlocation.
        // hide them from public interface side of object by making them local variables
        let defaultLocation = {x:0, y:0};
        let computeOptimiumLocation = function(){
             ////....
        }
        this.draw = function(){
                let x, y;
                // closures fucntions inside of another function///
                // cloures have scope also from their parent function.
                computeOptimiumLocation(0.1);
                console.log("draw");
        }
}

const circleNew = new circleAb(11);


// getters and  setters //////////
// getter a function that is  used to read a proprty.
// setter defines a proprty of an object fromoutsude the scope.

// want to access defaultlocatin from ibject interface.
function CircleSet(radius){
        this.radius = radius;
       
        let defaultLocation = {x:0, y:0};
        // closure
        this.getDefaultLocation = function(){
                return defaultLocation;
        }
       this.draw = function(){
                let x, y;
                console.log("draw");
        }
}


const circleSetter= new circleSet(12);
circleSetter.getDefaultLocation();




// excercise - make a constructor excercise with player - own excrcise.

function player(team, sport){
        this.team = team;
        this.sport = sport;
        this.play = function(){
                console.log(this.sport);
        }
}

const newPlayer = new player("jags","football");
console.log(newPlayer);

