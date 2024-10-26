var name = "Pranav";
var dob = "13/11/1997";
var mobile = 7773969004;
console.log(
  `Hello My Name is ${name} and my Date of birth is ${dob},and My contact number is ${mobile}`
);

const abc = new String("Pranav Devkar");
console.log(abc[0]);
console.log(abc.__proto__);
console.log(abc.length);
console.log(abc.toUpperCase()); //convert Uppercase
console.log(abc.toLowerCase()); //convert Lowercase
console.log(abc.charAt(2)); //To check which character at 2nd position it starts count from 0
console.log(abc.indexOf("a")); //To find position of a

var newSubString = abc.substring(0, 4);
console.log(newSubString);

var newStringSlice = abc.slice(-5, -1);
console.log("hii", newStringSlice);

var trimFun = "      Hello        ";
console.log(trimFun);
console.log(trimFun.trim());
