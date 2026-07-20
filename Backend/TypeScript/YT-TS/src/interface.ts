interface Chai {
    flavour: string;
    price: number;
    milk?: boolean;
}

const masalaChai: Chai = {
    flavour: "masala",
    price: 20,
    milk: true
};

// The main goal of interface in typescript is to define the structure of an object.
// It allows us to specify the properties and their types that an object should have. 
// In this example, the Chai interface defines the structure of a chai object with flavour and price properties, and an optional milk property.
//  The masalaChai object is created based on this interface, ensuring that it adheres to the defined structure.

// Interfaces doesn't generate any JavaScript code when compiled, they are purely a TypeScript construct used for type checking and enforcing structure.
// and it is the advantage of using interface in typescript because it helps to catch errors at compile time and provides better code maintainability and readability.


interface Shop {
    readonly id: number;
    name: string ;
}

const s: Shop = {id:1, name:"Chaiwala"};
// s.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.


// One more intreseting things with interface is how it handle functions
// Becuase in interface we only create Structure of an object , it doesn't handle data or logic of an object.
//  So we can define a function in interface and implement it in class.

interface DiscountCalculator {
    (price: number):number ;
    // Here we just define the structure of a function that takes a price as input and returns a number only, but it doesn't provide any implementation for the function.
}

const apply50: DiscountCalculator = (price) => price * 0.5;
// Here we implement the DiscountClaculator interface function by providing the logic to calculate the discounted price.
// This function takes a price as input and returns the discounted price by applying a 50% discount.


interface TeaMachine{
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start(){
        console.log("Tea machine started");
    },
    stop(){
        console.log("Tea machine stopped");
    }
}
// Here we implement the TeaMachine interface by providing the logic for the start and stop methods. The start method logs a message indicating that the tea machine has started, and the stop method logs a message indicating that the tea machine has stopped.



// Indexed Signature : An indexed signature allows us to define the type of properties that can be accessed using an index (like an array or object). It is useful when we want to create objects with dynamic property names.

interface ChaiRatings {
    [flavour: string]: number; // This indexed signature allows us to define properties with dynamic names (flavours) and their corresponding values (prices). The flavour is a string, and the price is a number.
}
const ratings: ChaiRatings = {
    masala: 5,
    green: 4,
}
// Here we create an object ratings that adheres to the ChaiRatings interface. It has dynamic properties (flavours) with their corresponding values (ratings). The masala flavour has a rating of 5, and the green flavour has a rating of 4. We can add more flavours and their ratings as needed, and TypeScript will enforce the structure defined by the ChaiRatings interface.





// Interface can merge
// let a User interface come from a library and we want to add some properties so we define here
interface User { // Let t come from a library
    name: string;
}

interface User{ // these we define which will merge with the above interface
    age: number;
}
const user: User = {name:"John", age:30};
// Here we define two User interfaces with different properties.
//  TypeScript will merge these interfaces into a single User interface that has both name and age properties. The user object is created based on this merged interface, ensuring that it adheres to the defined structure.
// We have to satisfy both properties of the merged interface when creating an object of type User.




// interface can be extended like class inheritance
interface A {a: string}
interface B {b: string}

interface C extends A, B {c: string} 
// C interface extends both A and B interfaces, so it inherits their properties a and b. It also adds its own property c.
const obj: C = {a:"Hello", b:"World", c:"!"};
// Here we create an object obj that adheres to the C interface. It has properties a, b, and c, satisfying the structure defined by the extended interfaces A and B.

// its likewise above we can extend multiple interfaces and create a new interface that combines their properties. This allows for better code organization and reusability, as we can define common properties in separate interfaces and then extend them as needed.