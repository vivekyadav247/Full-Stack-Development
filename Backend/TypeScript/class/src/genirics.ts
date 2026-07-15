function getResponse<T>(data: T[]){
    return {
        success : true,
        status : 200,
        data,
    }
}
const num = getResponse([1,2,3,4,5]).data;
const str = getResponse(["one", "two", "three"]).data;
const mix = getResponse([1, "two", 3, "four"]).data;


// Generic Type 
// A generic type is a way to define a type that can work with multiple types. It allows you to create reusable components that can work with different data types without sacrificing type safety. In TypeScript, you can define a generic type using angle brackets <> and a type parameter. For example, you can define a generic function that takes an array of any type and returns the first element of that array as follows:

// One more Example
type ApiResponse<T> = {
    data : T ;
    isError : boolean
}

type UserResponse = ApiResponse<{ name: string; age: number }> ;
type BlogResponse = ApiResponse<{ title: string; content: string }> ;


// Generic Interface
// A generic interface is a way to define an interface that can work with multiple types. It allows you to create reusable components that can work with different data types without sacrificing type safety. In TypeScript, you can define a generic interface using angle brackets <> and a type parameter. For example, you can define a generic interface that represents a response from an API as follows:

interface User{
    username : string ;
}

interface Product{
    title : string ;
}

interface Result<T> {
    data : T ;
    errorMsg: string | null ;
}

function fetch<T> (url : string): Result<T>{
    return {data: {username : "vivek_247"} as T, errorMsg: null}
}

// fetch User
let result = fetch<User>('../api/user') ;
let user = result.data ;

// fetch Product
let result1 = fetch<Product>('../api/product') ;
let product = result1.data ;