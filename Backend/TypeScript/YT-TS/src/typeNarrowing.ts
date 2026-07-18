// Type Narrowing
// It is a technique used in TypeScript to refine the type of a variable based on certain conditions. It allows you to narrow down the type of a variable to a more specific type, which can help prevent runtime errors and improve code readability. Type narrowing can be achieved using various techniques, such as type guards, conditional statements, and type assertions.
function getChai(kind: string| number){
    if(typeof kind === "string"){
        return `Making chai with ${kind.toUpperCase()}` ;
    }
    return `Chaid order for ${kind.toFixed(2)}` ;
}

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}` ;
    }
    return "Serving chai" ;
}

// Exhaustive Check
// Exhaustive check is a technique used in TypeScript to ensure that all possible cases of a union type are handled in a switch statement or an if-else chain. It helps to catch errors at compile-time by ensuring that all possible cases are accounted for, and it can also improve code readability by making it clear what cases are being handled. To perform an exhaustive check, you can use the never type, which represents a value that never occurs. By adding a case for the never type in your switch statement or if-else chain, you can ensure that all possible cases of the union type are handled.
function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `small cutting chai` ;
    }
    if(size === "medium"){
        return `medium cutting chai` ;
    }
    if(size === "large"){
        return `large cutting chai` ;
    }
    return `Order for ${size} chai` ;
}

// type guard
// Type guards are a way to narrow down the type of a variable based on certain conditions. They allow you to refine the type of a variable to a more specific type, which can help prevent runtime errors and improve code readability. Type guards can be implemented using various techniques, such as typeof checks, instanceof checks, and user-defined type guard functions.

// Instanceof Narrowing
// Instanceof narrowing is a technique used in TypeScript to refine the type of an object based on its constructor function. It allows you to narrow down the type of an object to a more specific type, which can help prevent runtime errors and improve code readability. Instanceof narrowing can be achieved using the instanceof operator, which checks whether an object is an instance of a particular constructor function.
class KulhadChai{
    serve(){
        return "Serving kulhad chai" ;
    }
}
class CuttingChai{
    serve(){
        return "Serving cutting chai" ;
    }
}
function serve(chai: KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve() ;
    }
    if(chai instanceof CuttingChai){
        return chai.serve() ;
    }
}


type ChaiOrder = {
    type : string;
    sugar : number;
}

function isChaiOrder(obj: any) : obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}
function serveOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar` ;
    }
    return `Serving regular chai : ${item}` ;
}


type MasalaChai = {
    type: "masala";
    spiceLevel: number ;
}

type AdrakChai = {
    type: "adrak";
    gingerLevel: number ;
}

type ElaichiChai = {
    type: "elaichi";
    cardamomLevel: number ;
}


type Chai = MasalaChai | AdrakChai | ElaichiChai ;

function serveChaiOrder(order: Chai){
    switch(order.type){
        case "masala":
            return `Serving masala chai with spice level ${order.spiceLevel}` ;
        case "adrak":
            return `Serving adrak chai with ginger level ${order.gingerLevel}` ;
        case "elaichi":
            return `Serving elaichi chai with cardamom level ${order.cardamomLevel}` ;
        default:
            const _exhaustiveCheck: never = order ;
            return _exhaustiveCheck ;
    }
}


// Unknown Type 
// The unknown type is a type-safe counterpart of the any type in TypeScript. It represents a value that could be of any type, but unlike any, it requires explicit type checking or type assertions before you can perform operations on it. This makes unknown a safer choice when dealing with values of uncertain types, as it forces developers to handle potential type mismatches and ensures better type safety in the codebase.
function isStringArray(arr: unknown) : arr is string[]{
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}