// rewrite filter
// checknum in array theo yeu cau cua callback

let arr = [0,4,9,5,3,4,5];

Array.prototype.myFilter = function(callback) {
    let newArray = [];
    for (let index = 0; index < this.length; index++) {
        if(callback(this[index],index)) {
            newArray.push(this[index]);
        }
    }
    return newArray;
}

let callback = function(item , index) {
    return item > 4;
}

const myFilter = arr.myFilter(callback);

const filter = arr.filter(callback);

export {myFilter , filter}

