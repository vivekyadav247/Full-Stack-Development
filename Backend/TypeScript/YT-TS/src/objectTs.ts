const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true,
}

// The type of the chai object is inferred as:
// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

let tea : {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Green Tea",
    price: 15,
    isHot: false,
}

// Type alias of object type
type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}
// The type of the adrakChai object is explicitly defined as Tea
const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["tea leaves", "ginger", "milk", "sugar"],
}



type Cup = {size: string} ;
let smallCup: Cup = {size: "200ml"};
let bigCup = {size: "500ml", material: "steel"} ; 
smallCup = bigCup; // here duck typing is applied, as smallCup has a subset of properties of bigCup, so this assignment is valid.
// bigCup = smallCup; // this assignment is invalid, as bigCup has a superset of properties of smallCup, so this assignment is invalid.


type Brew = {brewTime: number};
let coffee = {brewTime: 2, beans: "Arabica" };
let chaiBrew:Brew = coffee; // here duck typing is applied, as chaiBrew has a subset of properties of coffee, so this assignment is valid.
// coffee = chaiBrew; // this assignment is invalid, as coffee has a superset of properties of chaiBrew, so this assignment is invalid.
// jyada properties wale object ko kam properties wale object me assign karna valid hai, lekin kam properties wale object ko jyada properties wale object me assign karna invalid hai.




type Item = {
    name: string;
    quantity: number;
}
type Address = {street: string; pin: number} ;
type Order = {
    id: string;
    items: Item[];
    address: Address;
}
// here separate types are defined for Item and Address, and then they are used in the Order type. This makes the code more modular and reusable.


type Chai = {
    name : string ;
    price: number;
    isHot : boolean;
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with the following properties:", updates);
}

updateChai({price: 30}); // valid, as price is a property of Chai
// Here Partial<Chai> makes all properties of Chai optional, so we can pass an object with only the properties we want to update.
// only partial properties of the Chai type can be passed to the updateChai function, making it flexible for updates.
updateChai({isHot: false}); // valid, as isHot is a property of Chai

updateChai({}) ;
// But when we pass empty object, it can create an issue, as we are not updating any property of the Chai type. So, we can add a check in the updateChai function to ensure that at least one property is being updated.
// Partial make all data type optional


type ChaiOrder = {
    name?: string ;
    quantity?: number;
}

const placeChaiOrder = (order: Required<ChaiOrder>) => {
    console.log("Placing chai order with the following details:", order);
}
placeChaiOrder({name: "Masala Chai", quantity: 2}); // valid, as both name and quantity are provided
// placeChaiOrder({name: "Masala Chai"}); // invalid, as quantity is missing
// placeChaiOrder({quantity: 2}); // invalid, as name is missing
// Required<ChaiOrder> makes all properties of ChaiOrder required, so we need to provide both name and quantity when placing an order.




type Chai2 = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}
// Pick utility type is used to create a new type BasicChaiInfo that only includes the name and price properties from the Chai2 type. This is useful when we want to work with a subset of properties from a larger type, making our code more focused and easier to manage.
type BasicChaiInfo = Pick<Chai2, "name" | "price">;
const chaiInfo : BasicChaiInfo = {
    name: "Lemon Chai",
    price: 25
} 
// Here we precisely pick the properties we want from the Chai2 type, and create a new type BasicChaiInfo that only includes those properties. This allows us to work with a smaller, more focused type when we only need certain information about a chai.



type Chai3 = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}

type PublicChai = Omit<Chai3, "secretIngredients">;
const publicChaiInfo: PublicChai = {
    name: "Tulsi Chai",
    price: 30,
    isHot: true
}



