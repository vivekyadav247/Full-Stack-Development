function makeChai(order: {type: string, sugar: number, strong: boolean}){
    console.log(order) ;
}

function serveChai(order: {type: string, sugar: number, strong: boolean}){
    console.log(order) ;
}

// Here Data signature is same for both function but we can use type alias to avoid repetition of type signature.
// type alias
type ChaiOrder = {
    type : string ;
    sugar : number ;
    strong : boolean ;
}

function makeChai1(order: ChaiOrder){
    console.log(order) ;
}
function serveChai1(order: ChaiOrder){
    console.log(order) ;
}


type TeaRecipe = {
    water : number ;
    milk : number ;
}

class MasalaChai implements TeaRecipe{
    water = 100 ;
    milk = 50 ;
}

// currently we dont have any error, but our code is crashed 

// type CupSize = "small" | "medium" | "large" ;
// class Chai implements CupSize{

// }

// here we got errors because our type alias is not an object type, it is a union type. So we cannot implement a union type in a class. We can only implement an object type in a class. So we should use interface instead of type alias for object types.


interface CupSize{
    size : "small" | "medium" | "large" ;
}
class Chai implements CupSize{
    size : "small" | "medium" | "large" = "large" ;
}
// here we dont have any error because our interface is an object type and we can implement an object type in a class. So we should use interface instead of type alias for object types.


// here one more things where type alias is not good to use
// type Response = {ok : true} | {ok : false}
// class myRes implements Response{
//     ok : true | false = true ;
// }

// Here we got error because our type alias is a union type and we cannot implement a union type in a class. So we should use interface instead of type alias for union types.



type TeaType = "green" | "black" | "herbal" ;
function orderChai(t:TeaType){
    console.log(t);
}
// here we dont have any error because our type alias is a union type and we can use a union type in a function parameter. So we should use type alias instead of interface for union types.

// intersection types
type BaseChai = {teaLeaves : number} ;
type Extra = {ginger : boolean} ;

type GingerChai = BaseChai & Extra ;

const cup : GingerChai = {
    teaLeaves : 5,
    ginger : true
} ;


// optional properties
type user = {
    username : string ;
    bio? : string ; // optional property
}

const u1 : user = {username : "vivek_247"} ; // here we dont have any error because bio is an optional property
const u2 : user = {username : "vivek_247", bio : "I am a software developer"} ; // here we dont have any error because bio is an optional property

type Config = {
    readonly appName : string ; // readonly property
    version : string ;
}

const config : Config = {appName : "Chai App", version : "1.0.0"} ;
config.version = "1.0.1" ; // here we dont have any error because version is not a readonly property
//@ts-ignore
config.appName = "New Chai App" ; // here we got error because appName is a readonly property and we cannot change its value after initialization

