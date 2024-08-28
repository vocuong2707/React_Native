// myReduce
Array.prototype.myReduce = function(callback,initNumber) {
    let accumulator = initNumber;
    for (let index = 0; index < this.length; index++) {
        accumulator = callback(accumulator,this[index]);
    }
    return accumulator;
}

let arr = [6,4,8,5,2];

let initNumber = 1;



let callback = function(accumulator , currentValue) {
   return accumulator * currentValue;
}




export const myReduce = arr.myReduce(callback,initNumber);
export const reduce = arr.reduce(callback,initNumber);
