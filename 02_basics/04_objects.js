const tinderUser = new Object();
console.log(tinderUser);

// add values in above empty objects
tinderUser.id = 1311;
tinderUser.name = "Pranav";
tinderUser.email = "pranav@gmail.com";
console.log(tinderUser);

const regularUser = {
  email: "pd@gmail.com",
  userDetails: {
    fullName: {
      first_name: "Pranav",
      last_name: "Devkar",
      },
      username:"pranav123",
    },
  pasword:"pranav@123"
};

console.log(regularUser);

obj1 = { 1: "a", 2: "b" };
obj2 = { 3: "b", 4: "c" };
// obj3 = { obj1, obj2 };
// obj3 = Object.assign({},obj1,obj2)
obj3={...obj1, ...obj2}
console.log("obj3 is", obj3);


course = {
    subject: "Javascript",
    price: 3500,
    courseInstructor:"Hitesh Choudhari"
}

const { courseInstructor: instructor } = course; //access the courseInstructor from course and : after colon is used to make name short as you wish
console.log(instructor);
