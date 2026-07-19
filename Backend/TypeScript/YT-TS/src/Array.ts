const ChaiFlavours: string[] = ["masala", "green", "ginger", "cardamom"];
const ChaiPrices: number[] = [20, 15, 25, 30];

const rating: Array<number> = [4.5, 4.0, 4.8, 4.2];
// Here in the Array<> we can pass our custom type in the place of number, string, boolean etc. For example, we can create an array of objects with a custom type like this:
type Chai = {
    name: string;
    price: number;
}
const menu: Array<Chai> = [
    { name: "Masala Chai", price: 20},
    { name: "Green Chai", price: 15 },
    { name: "Ginger Chai", price: 25 },
    { name: "Cardamom Chai", price: 30 }
]

// Read Only Array : this array is that we can only create we cant modify it, we can only read it. For example, we can create a read-only array of strings like this:
const readOnlyChaiFlavours: readonly string[] = ["masala", "green", "ginger", "cardamom"];
// readOnlyChaiFlavours.push("tulsi"); // this will give an error, as we cant modify the read-only array. We can only read it.


// Multi-dimensional Array : this is an array of arrays, we can create a multi-dimensional array of numbers like this:
const multiDimensionalArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// Here multiDimensionalArray is an array of arrays of numbers. We can access the elements of the multi-dimensional array using two indices, for example, multiDimensionalArray[0][1] will give us 2.
// We can also create a multi-dimensional array of objects with a custom type like this:
type ChaiOrder = {
    type: string;
    cups: number;
}
const multiDimensionalChaiOrders: ChaiOrder[][] = [
    [
        { type: "masala", cups: 2 },
        { type: "green", cups: 1 }  
    ],
    [
        { type: "ginger", cups: 3 },
        { type: "cardamom", cups: 2 }
    ]
]
// Here multiDimensionalChaiOrders is an array of arrays of ChaiOrder objects. We can access the elements of the multi-dimensional array using two indices, for example, multiDimensionalChaiOrders[0][1] will give us { type: "green", cups: 1 }.