let chaiTuple : [string, number] ;
chaiTuple = ["masala", 2]; // here chaiTuple is a tuple of type [string, number], so we can assign a string and a number to it in that order. The first element is the type of chai and the second element is the number of cups.


// chaiTuple = [20, "masala"]; // this assignment is invalid, as the first element is a number and the second element is a string, which does not match the tuple type [string, number].

// Tupple is like an array but give fixed number of elements and types for each element. In this case, chaiTuple is a tuple that expects the first element to be a string (the type of chai) and the second element to be a number (the number of cups).


let userInfo: [string, number, boolean?];
userInfo = ["John Doe", 30]; // here userInfo is a tuple of type [string, number, boolean?], so we can assign a string and a number to it in that order. The first element is the name of the user, the second element is the age of the user, and the third element is an optional boolean indicating if the user is active or not.
userInfo = ["Jane Doe", 25, true]; // here we are also assigning a boolean value to the third element, which is valid as it is optional.



// readOnly tuple : this is a tuple that we can only create we cant modify it, we can only read it. For example, we can create a read-only tuple of string and number like this:
const location: readonly [number, number] = [10.00, 20.92]; // here location is a read-only tuple of type [number, number], so we can assign two numbers to it in that order. The first element is the latitude and the second element is the longitude.
// location[0] = 15.00; // this will give an error, as we cant modify the read-only tuple. We can only read it.



const chaiItems: [name: string, price: number] = ["Masala Chai", 20]; // here chaiItems is a tuple of type [name: string, price: number], so we can assign a string and a number to it in that order. The first element is the name of the chai and the second element is the price of the chai. We have also given names to the elements of the tuple for better readability.