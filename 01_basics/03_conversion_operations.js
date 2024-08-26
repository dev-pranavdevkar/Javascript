dob="13";
test_number="1234"

console.log("Before Conversion",typeof dob);
console.log(typeof(dob));
let convert_test_number=String(test_number)
let date_of_birth=Number(dob);
console.log("After Conversion",typeof date_of_birth);

user_logged_in=0;

let loggedIn= Boolean(user_logged_in);

console.table([[typeof loggedIn,loggedIn],[typeof user_logged_in,user_logged_in],[typeof convert_test_number,convert_test_number]]);

// When we put the value and try to convert in boolean then
//  "1" => true
// "0" => false
// "0" => false when keep it empty string
// "pranav" => true

