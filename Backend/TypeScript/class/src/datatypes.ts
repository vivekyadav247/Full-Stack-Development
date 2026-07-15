let sales : number = 123_456_789;
let largestNumber : bigint = 1_000_000_000n;
let course : string = "TypeScript";
let is_published : boolean = true;
let name : undefined = undefined;
let sym : symbol = Symbol("key");

// any type noImplecitAny is set to true in tsconfig.json, so we need to explicitly declare the type as any
let naam : any ;



// unknown type is a type-safe counterpart of any type. It is used when we don't know the type of a variable at the time of writing code. We can assign any value to a variable of type unknown, but we cannot perform any operations on it without first asserting its type.
function render(document: unknown) {
    if (typeof document === "string") {
        console.log(document.toUpperCase());
    } else {
        console.log(document);
    }
}



// never type is a type that represents values that never occur. It is used to indicate that a function never returns or that a variable can never have a value. For example, a function that always throws an error or a variable that is always null or undefined can be assigned the never type.
function throwError(message: string): never {
    throw new Error(message);
}

throwError("This is an error message");



// Enums are a way to define a set of named constants. They can be used to represent a collection of related values, such as the days of the week or the months of the year. Enums can be defined using the enum keyword, and each member of the enum is assigned a numeric value by default, starting from 0. However, we can also assign custom values to the members of an enum.
const enum TeamStrength {
    Weak=1, Good, Strong
} ;
let yellow = TeamStrength.Weak;
console.log(yellow);



// Arrays are a way to store multiple values in a single variable. In TypeScript, we can define the type of the elements in an array using square brackets [] or the Array<T> syntax. For example, we can define an array of numbers as follows:
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["one", "two", "three"];


// Tuple is a way to define an array with a fixed number of elements, where each element can have a different type. In TypeScript, we can define a tuple using square brackets [] and specifying the types of each element in the tuple. For example, we can define a tuple that contains a string and a number as follows:
let tuple: [string, number] = ["John", 30];
let album: [string, number, boolean] = ["Album Name", 2023, true];


// Object is a way to define a collection of key-value pairs, where each key is a string and each value can be of any type. In TypeScript, we can define the type of an object using an interface or a type alias. For example, we can define an object that represents a person as follows:
let mentor: { id: number; name: string; age: number, teaches:(sub : string[]) => void, address?: string } = { id: 1, name: "Vivek", age: 30 , teaches: () => { console.log("Teaching TypeScript"); } };                         


// functions are a way to define reusable blocks of code that can be called with different arguments. In TypeScript, we can define the types of the parameters and the return value of a function using the function signature. For example, we can define a function that adds two numbers as follows:
function calculatePrice(team : string): number {
    if(team.toLowerCase() === "rr") {
        return 15e10;
    }

    if(team.toLowerCase() === "rcb") {
        return 18e10;
    }

    if(team.toLowerCase() === "csk") {
        return 500_000;
    }

    return NaN;
}
calculatePrice("RR");


// Type Inference
// It is a feature of TypeScript that allows the compiler to automatically infer the type of a variable based on its initial value. For example, if we declare a variable and assign it a string value, TypeScript will infer that the variable is of type string. This can help reduce the amount of type annotations we need to write in our code, making it more concise and easier to read.

let guestTheType = {
    id: 1,
    name: "Vivek",
    age: 30,
    teaches: (sub: string[]) => { console.log("Teaching TypeScript"); }
}

// Even though we haven't explicitly declared the type of the guestTheType variable, TypeScript is able to infer its type based on the properties and methods that are defined in the object literal. This means that we can use the guestTheType variable as if it were of a specific type, without having to declare that type explicitly.

// This is an extremely powerful feature of TypeScript, as it allows us to write code that is both concise and type-safe. However, it's important to note that type inference is not always perfect, and there may be cases where we need to explicitly declare the type of a variable to ensure that our code behaves as expected.