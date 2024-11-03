// Singleton
// objects.create

// object Literals

const jsuser = {
    name: "Pranav",
    phone: 7773969004,
    address: "Kurlap",
    age: 27,
    email:"pranavdevkar@gmail.com"
};

console.log(jsuser);
//Access values by key
console.log(jsuser.name);
console.log(jsuser["phone"]);

// Change the values
jsuser.name = "Dipali Pranav Devkar";
console.log(jsuser.name);

// If you want to noone can change your objects values
// Object.freeze(jsuser);
jsuser.name = "Pranav Bhagwan Devkar";
console.log(jsuser.name);


jsuser.greeting = function () {
    console.log("Hello Guys its a function");
}

console.log(jsuser.greeting); //undefined
console.log(jsuser.greeting()); //undefined

jsuser.greeting2 = function () {
  console.log(`Hello ${jsuser.name} its a function,`);
};

console.log(jsuser.greeting2()); 