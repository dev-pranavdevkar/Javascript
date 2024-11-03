arr1 = ["Shanktiman", "Spiderman", "Parman", "Ninja Hatodi"];
arr2 = ["Pranav", "Dipali", "Sushama", "Snehal"];
console.log(arr1, arr2);
//To add array values only
arr3 = arr1.concat(arr2);

console.log(arr3);

//Concat by spread operators  ... -it is called spread operrator;
arr4 = [...arr1, ...arr2];
console.log(arr4);

arr1_in_arr2 = [1, 2, 3, [13, 11, 97], 4, 5, 6, 7, [1, 2, 3, [5, 6, 7]]];

console.log(arr1_in_arr2);
//Flat functin gives you value in single array -if you have array in array in array ...
arr_cobined_in_one = arr1_in_arr2.flat(Infinity);

console.log("Combined a array", arr_cobined_in_one);

// Ask is Arrey or not
console.log(Array.isArray("Pranav"));

//Convert above to array
console.log(Array.from("Pranav"));

console.log(Array.from({ name: "Pranav" })); //In that case it gives empty[] array

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;

console.log(Array.of(score1, score2, score3, score4, score5));
