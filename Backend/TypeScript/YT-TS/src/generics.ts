function wrapInArray<T>(item:T) : T[] {
    return [item];
}

wrapInArray(5); // returns [5]
wrapInArray("Hello"); // returns ["Hello"]
wrapInArray({name: "John", age: 30}); // returns [{name: "John", age: 30}]

// So generics usually used when we want to create reusable components that can work with a variety of types rather than a single one.
//  It allows us to define a function, class, or interface that can operate on different data types while still maintaining type safety.


// lets take one more example of generics

function pair<A, B>(a:A, b:B): [A,B]{
    return [a,b] ;
}
// here when we return data then we have to maintain the type of data which we are returning so we use generics here to maintain the type of data which we are returning.


pair(1, "one"); // returns [1, "one"]
pair("Hello", true); // returns ["Hello", true]



// Generic Interface : A generic interface allows us to define an interface that can work with different data types while maintaining type safety. It provides a way to create reusable components that can operate on various types.

interface Box<T> {
    content: T; // The content property is of type T, which is a generic type parameter. It allows us to specify the type of content when we create an object that implements the Box interface.
}

const numberBox: Box<number> = { content: 42 };
 // Here we have to give type first for T , then we can use that type for content property of Box interface. 
 // In this case, we specify that the content property should be of type number, and we create an object numberBox that adheres to the Box<number> interface.

const stringBox: Box<string> = { content: "Hello" };
// Similarly, we create another object stringBox that adheres to the Box<string> interface. 
// The content property is of type string, and we assign the value "Hello" to it. This demonstrates how we can use the generic Box interface with different data types while maintaining type safety.



// lets take anb examnpleof real world usage of generics
interface ApiPromise<T>{
    status: number;
    data:T;
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: { flavor: "Masala" }
}

// we can use generics in form state management like redux or react-query to maintain the type of data which we are getting from api and we can use that type in our component to maintain the type safety. 
