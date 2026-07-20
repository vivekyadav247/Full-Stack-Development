import axios from "axios";
import type { AxiosResponse } from "axios";

axios.get("https:example.com/data")
.then(response =>{
    console.log(response.data);
})
// Here we are using axios to make a GET request to the specified URL. The response is logged to the console.
// but sometimes , some libraries ko install kar lete hai but types ke errors aate hai
// so we can use @types library to fix that issue.
// eg. npm install @types/axios -D

// in case if it is not available then we can create a custom type for that library and use it in our project.
// we create .d.ts file and define the library from their library documentation and use it in our project.

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// Here we are defining a custom type for the response data we expect from the API. This helps TypeScript understand the structure of the data and provides better type checking and autocompletion.
// then fetchData function is created to make the GET request and handle the response and errors appropriately.
// AxiosResponse is used to type the response object which we create interface for the expected data structure. The function is marked as async to use await for the axios.get call, making it easier to read and handle asynchronous code.

const fetchData = async () => {
    try{
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
    }catch(error:any){
        if(axios.isAxiosError(error)){
            console.error("Axios error:", error.message);
            if(error.response){
                console.error("Response data:", error.response.status, error.response.data);
            }
        }
    }
}