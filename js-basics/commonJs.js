// other part is in tooling.js


// implemntation detalils.
// this is private to the fromt end. a we are only exporting
// this  entire circle class.
const _radius = new WeakMap();


// public interface.
class Circle {
    constructor(radius){
        _radius.set(this, radius);

    }
    draw(){
        console.log("circle with radius" + _radius.get(this));
    }
}


// smodule with export object calling it crcle, linked to the 
// circle object above.
module.exports.Circle = Circle;