function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type} chai...`);
}
makeChai("masala",2) ; // Here makeChai function takes two parameters, type and cups, and logs a message indicating the type of chai being made and the number of cups. The function is then called with "masala" as the type and 2 as the number of cups.

function getChaiPrice(type: string): number {
    if (type === "masala") {
        return 20;
    } else if (type === "green") {
        return 15;
    } else {
        return 10; // default price for other types
    }
}
getChaiPrice("masala"); // Here getChaiPrice function takes a type parameter and returns the price of the chai based on the type. The function is then called with "masala" as the type, and it returns 20.


function makeOrder(order: string){
    if(!order) return null 
    return order
}
// here makeOrder function takes an order parameter and returns null if the order is falsy (e.g., empty string, null, undefined), otherwise it returns the order. This function can be used to validate orders before processing them.


function logChai(): void {
    console.log("Logging chai details...");
}
// it is only logging the chai details and not returning any value, so the return type is void. This function can be used to log chai details without expecting any return value.


// function orderChai(type?: string){
//  }
 // we can make the type parameter optional by adding a question mark after it. This means that the function can be called with or without the type parameter.

function orderChai(type: string = "masala") {
    console.log(`Ordering ${type} chai...`);
}
// Here orderChai function takes an optional type parameter with a default value of "masala". If the function is called without a type, it will default to "masala". This allows for flexibility in ordering chai without always specifying the type.



function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "medium" | "large";
}): number {
    return 5 ;
}
// Here createChai function takes an order parameter that is an object with type, sugar, and size properties. The function returns a number (in this case, 5). This function can be used to create a chai order with specific details and return a price or quantity.