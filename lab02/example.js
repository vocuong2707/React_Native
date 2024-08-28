//rewrite map

let arr = [0,5,7,6,3]

Array.prototype.mapArray = function(callback) {
    let newArray = [];
    for (let index = 0; index < this.length; index++) {   
        newArray.push(callback(this[index],index));
    }
    return newArray;
}


let callback = function(item,index) {
    return item * 2 * index;
}
const arrMap = arr.map(callback);
const myArrMap = arr.mapArray(callback);

export {myArrMap,arrMap};
