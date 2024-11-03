var ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("ary1 is", ar1);
console.table(["value of 4th position of ary1 is", ar1[4]]);

// another method to declare array
var ar2 = new Array(1, 2, 3, 4, 5);
console.log("Another method of declare array",ar2, ar2.length);

//Add values at end
ar2.push(13);
console.log("ar2 after Push 13", ar2);

//Remove last value
ar2.pop();
console.log("ar2 after After pop()", ar2);

//Add a value at first
ar2.unshift(11);
console.log("ar2 unshift 11", ar2);

//Remove a value at first
ar2.shift();
console.log("ar2 shift", ar2);

// to check value is present or not in array
console.log(ar2.includes(5));

//value of index number at
console.log(ar2.indexOf(5));

const newAr2 = ar2.join()
console.log("ar2", ar2);
console.log("newAr2", newAr2);
console.log("newAr2", typeof newAr2);

//Slice
console.log("Before Slice", ar2);
slicedArr2 = ar2.slice(1, 3);
console.log("After Slice", slicedArr2);


//Splice
console.log("Before Slice", ar2);
splicedArr2 = ar2.splice(1, 3);
console.log("After Slice", splicedArr2);

