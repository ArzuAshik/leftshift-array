function rotateLeft(arr = [], rotateAmount = 0){
    let rotate = rotateAmount;
    const arrayLength = arr.length;
    if(rotateAmount > arrayLength){
        rotate = rotateAmount % arrayLength;
    }
    if(rotate === 0) return arr;

    const a = arr.slice(rotate, arrayLength);
    const b = arr.slice(0, rotate);
    return [...a, ...b];
}

const result = rotateLeft([1, 2, 3, 4, 5], 4 );

console.log(result);