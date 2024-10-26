console.log("06_nums_and_maths.js");

console.log(Math.round(4.3)); //round of
console.log(Math.ceil(4.3)); //round of select largest value
console.log(Math.floor(4.3)); //round of select smallest value
console.log(Math.abs(-4.3)); //Absulute value it converts nigative value to positive
console.log(Math.min(1, 3, 1, 1, 1, 9, 9, 7)); //find minmum value between
console.log(Math.max(1, 3, 1, 1, 1, 9, 9, 7)); //find maximum value between
console.log(Math.random()); //find random value it gives value between 0 to 1 so to avoid this we have to  multiply random value to 10 ,it may be 0 to avoid that we have to add 1 like below
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1); //value will be come in decimal so avoid this we will use roundof as below
console.log(Math.round((Math.random() * 10) + 1));

