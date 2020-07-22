// Store one value (variable as a String.)
const myString = "Hello, World!";
console.log( myString );

//store multiple value.(Multiple strings in an array variable)
const myArray = [myString, "A Second String"];
console.log( myArray );

//Array of person data(name, age, hobbies.)
const myPersonalArray = [
    "Henry", //Name
    32, // Age
    ["Program", "Hike", "Watch Movies"] //Hobbies
];
console.log( myPersonalArray[2]); // Display hobbies.

/**
 * JavaScript Objects
 * 
 * JSON - JavaScript Object Notation
 */

 const myPersonalObject = { // JavaScript Object (not necessarily 100% valid JSON)
    Name : "Henry",
    Age : 32,
    Hobbies: ["Program", "Hike", "Watch Movies"]

 };
 console.log( "My Name is:" + myPersonalObject.Name );
 console.log( "I am " + myPersonalObject.Age + " years old." );
 console.log( "I Like to:" + myPersonalObject.Hobbies );

//Output JavaScript Object...
console.log(myPersonalObject);
const validJSONString = JSON.stringify(myPersonalObject);
//Output Perfectly valid JSON string...
console.log(validJSONString);// this can be interpreted by other programming languages/programs!
//JSON helps us communicate in a universal format/standard.