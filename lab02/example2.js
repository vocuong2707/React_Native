// foreach
let arr = [1,4,7,8,5,2,3,0];

Array.prototype.myForEach = function(callback) {
    for(let index = 0; index < this.length ; index++) {
        callback(this[index],index);
    }
}

let callback = function(item , index) {
    console.log("index: " , index , "item: ", item);
}

export const forearch = arr.myForEach(callback);