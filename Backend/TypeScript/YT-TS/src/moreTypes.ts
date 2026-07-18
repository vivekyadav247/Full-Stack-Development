// Force type Assertion
let response : any = "42" ;

let numLength : number = (response as string).length ; // Force type assertion using 'as' keyword


type Book =  {
    name : string ;
}

let bookString = '{"name" : "The Great Gatsby"}' ;

let book : Book = JSON.parse(bookString) as Book ; // Force type assertion using 'as' keyword

book.name ; // Here we are asserting that the parsed JSON is of type Book, so we can access the 'name' property without TypeScript throwing an error.


//@ts-ignore it is use to ignore the ts errors for the next line of code
const inputElement = document.getElementById("myInput") as HTMLInputElement ; // Force type assertion using 'as' keyword


let val : any ;
val = "Chai" ;
val = [1,2,3] ;
val = 2.5 ;
val.toUpperCase() ; // Here we dont have any error because we are using 'any' type but it is not safe to use 'any' type because it can lead to runtime errors. So we should avoid using 'any' type as much as possible.


let newVal : unknown ;
newVal = "Hello, unknown!" ;
newVal = 42 ;
newVal = [1,2,4] ;

if(typeof newVal === "string"){
    newVal.toUpperCase() ; // Here we have to check the type of newVal before using it because it is of type 'unknown' and we cannot use it without checking its type.
}




try{

}catch(err){
    if(err instanceof Error){
        console.log(err.message) ; // Here we are checking if the error is an instance of Error class and then we can access the message property of the error object. It is also called type guard because we are narrowing down the type of the error object to Error class.
    }
    console.log("Error", err) ;
}



const data: unknown = "chai aur study ts" ;
const strData: string = data as string ; // Here we are asserting that the data is of type string and then we can assign it to strData variable. It is also called type assertion because we are asserting the type of the data variable to string type.


// never type
// The never type is a type that represents values that never occur. It is used to indicate that a function never returns or that a variable can never have a value. For example, a function that always throws an error or a function that has an infinite loop can be assigned the never type. The never type is also used in exhaustive checks to ensure that all possible cases of a union type are handled.
type Role = "admin" | "user" | "super-admin" ;
function redirectBasedOnRole(role: Role):void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard") ;
        return ;
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard") ;
        return ;
    }
    role ; // here pehle never tha fir super-admin add kiya to ab never nahi hai. Abhi bhi agar hum super-admin ko handle nahi karte to ye never type ka use karke hume error dega ki humne super-admin ko handle nahi kiya hai. Isse hume pata chal jaata hai ki humne sabhi possible cases ko handle kiya hai ya nahi.
}



function neverReturn():never{
    while(true){
        console.log("This function never returns") ;
    }
}
