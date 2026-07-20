// Fetch request implementation

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// Here we use the Fetch API to make a GET request to the specified URL. The response is logged to the console. We define a custom type for the expected response data structure, which helps TypeScript understand the data and provides better type checking and autocompletion. The function is marked as async to use await for the fetch call, making it easier to read and handle asynchronous code.

const fetchData = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Todo | unknown = await response.json(); // Using 'unknown' type to handle cases where the response might not match the expected structure
        console.log(data);
    } catch(error:any){
        console.error("Error fetching data:", error);
    }
}