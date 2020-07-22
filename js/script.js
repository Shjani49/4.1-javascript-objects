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
 myPersonalObject.Age = myPersonalObject.Age + 1; //Happy Birthday Henry!
 console.log(myPersonalObject.Age);

//Output JavaScript Object...
console.log(myPersonalObject);
const validJSONString = JSON.stringify(myPersonalObject);
//Output Perfectly valid JSON string...
console.log(validJSONString);// this can be interpreted by other programming languages/programs!
//JSON helps us communicate in a universal format/standard.


/**
 * Class
 * 
 * Classes are like blueprints! We make a guide/definition on what each person will have inside.
 */
//Start our blueprint with the "class" Keyword.
class Person {
    // We can use constructors to set the base properties for our objects(name/ age / hobbies in this case.)
    constructor ( name = "", age = 0, hobbies = [] ) // Default values set in our parameters.
    {
        this.name    = name;
        this.age     = age;
        this.hobbies = hobbies;

    }
    // We can add methods to a class, they are like "functions," but are run from objects instead.
    sayHello ()
    {
        //creating an element..
        const helloElement = document.createElement( "p");
        // Fill in the text of the element ( using template literal.)
        helloElement.textContent = `Hello, my name is ${this.name}!` ;
        // Add the new element to the body of our webpage.
        document.body.appendChild( helloElement );
    }
}


// Let's make some people!
const sarah = new Person;
console.log( sarah );
sarah.sayHello();// Call upon a method to execute.

//Note When we pass arguments, the default parameters are overwritten.
const jia = new Person("Jia", 23, ["Sleep","Cosplay"] );
console.log( jia );
jia.height = "7'"; // we / can /update and add new properties (but should we? Probably not.)
console.log(jia);
jia.sayHello();

// Values kept inside an object are considered "properties."
// Sets of instructions kept inside an object are considered "methods."