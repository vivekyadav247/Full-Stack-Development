// Types Aliases
// Type aliases allow you to create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you'd otherwise have to write by hand.

type Team = {
    name: string;
    getSquad: () => string[];
    readonly price: number,
    isBanned: boolean;
}

let csk: Team = {
    name : "Chennai Super Kings",
    getSquad() {
        return ["Thala"] ;
    },
    price: 500_000,
    isBanned: true
}



// Union Types
// Union types allow you to define a variable that can hold multiple types. You can use the | operator to separate the different types that a variable can hold. For example, you can define a variable that can hold either a string or a number as follows:
function kgtolb(weight: number | string): number {
    // Narrowing
    if (typeof weight === "number") {
        return weight * 2.20462;
    }

    return parseFloat(weight) * 2.20462;
}

console.log(kgtolb(100));


// Intersection Types
// Intersection types allow you to combine multiple types into a single type. You can use the & operator to combine the different types. For example, you can define a variable that combines the properties of two different types as follows:
type Male = {
    speak: () => void;
}

type Lion = {
    roar: () => void;
}

type Combined = Male & Lion;

let LordNarsimha: Combined = {
    roar: () => {
        console.log("The Universe trembles in fear");
    },
    speak: () => {
        console.log("Fear not, Prahlad. I am here to protect you.");
    }
}


// Nullable Types
// Nullable types allow you to define a variable that can hold either a value of a certain type or null. You can use the | operator to separate the different types that a variable can hold. For example, you can define a variable that can hold either a string or null as follows:
let name: string | null = "John";
function greet(name: string | null) {
    if (name === null) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${name}!`);
    } 
}



// Optional Chaining
// Optional chaining allows you to access properties of an object that may be null or undefined without causing a runtime error. You can use the ?. operator to access properties of an object that may be null or undefined. For example, you can access the name property of a person object that may be null or undefined as follows:
type Customer = {
    birthday?: Date ;
};

function getCustomerBirthday(id: number): Customer | null | undefined {
    return id === 0 ? null : id <= -1 ? undefined : { birthday: new Date() };
}

let customer = getCustomerBirthday(1);
console.log(customer?.birthday?.getFullYear());



// Nullish Coalescing Operator ??
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It is useful for providing default values for variables that may be null or undefined. For example, you can use the nullish coalescing operator to provide a default value for a variable that may be null or undefined as follows:
let speed : number | null | undefined = null;
let ride = {
    speed : speed ?? 30,

}
console.log(ride.speed);



// Types Assertions
// Type assertions are a way to tell the TypeScript compiler what the type of a variable is. They are used when you know more about the type of a variable than the compiler does. You can use the as keyword to assert the type of a variable. For example, you can assert that a variable is of type string as follows:
//@ts-ignore
let phone = document.getElementById("phone") as HTMLInputElement;
let phoneNo = phone.value;




// Interface 
// An interface is a way to define a contract for an object. It defines the shape of an object, including its properties and methods. Interfaces can be used to define the structure of objects, classes, and functions. They can also be used to define the types of parameters and return values for functions. For example, you can define an interface for a team object as follows:
interface Team2 {
    name: string;
    getSquad: () => string[];
    readonly price: number,
    isBanned: boolean;
}

const mi : Team2 = {
    name : "Mumbai Indians",
    getSquad() {
        return ["Rohit", "Ishan"];
    },
    price: 500_000,
    isBanned: false,
    captain: "Rohit Sharma"
}

// in the interface and type ailases the difference is that interface can be extended and implemented by classes, while type aliases cannot. Interfaces are also more flexible than type aliases, as they can be merged and augmented. However, type aliases can be used to define more complex types, such as union and intersection types, which cannot be defined using interfaces. In general, interfaces are preferred for defining the shape of objects and classes, while type aliases are preferred for defining more complex types.
interface Team2 {
    captain : string;
}