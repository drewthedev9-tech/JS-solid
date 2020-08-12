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
function createCirlce(radius){
    return circle ={
            radius: radius,
           
           draw: function(){
            console.log(" draw circle");
           }
                
        };
}

// creates a new circle object
const circle = createCirlce(1);
