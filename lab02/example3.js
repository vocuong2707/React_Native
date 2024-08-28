
// flatmap
// return new Array theo dieu kien cua callback
let arr = [1,4,7,8,5,2,3,0];

Array.prototype.myFlatMap = function(callback) {
    let newArray = [];
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index],index))     
    }
    return newArray
}


let callback = function(item , index) {
    return item === 5 ? {name:"Cuong" , age: 20} : 1;
}


export const myFlatMap = arr.myFlatMap(callback);
export const flatMap = arr.flatMap(callback);
