// Here we are using the promises way of file system module
import fs from "node:fs/promises" ;

// Promises File System Module
// In file System , the promises way is done by using promises methods
// Promises methods are non-blocking in nature ,
//  means the next line of code will be executed
//  without waiting for the current line of code to be executed completely
// It use when we want to execute the code in a non-sequential manner 
// and we want to use promises or async/await

// 1. write
// In file System , the write in promises way is done by writeFile method
// its takes two parameters , first is the file name and second is the data to be written in the file
// The third parameter is an object which contains the encoding type
await fs.writeFile("test.txt", "Hello From Promises FS ! 2") ;

// 2. Read
// In file System , the read in promises way is done by readFile method
// its takes two parameters , first is the file name and second is the encoding type
let data = await fs.readFile("test.txt", "utf-8")  // it will return the data in buffer format
console.log(data)

// 3. Update
// In file System , the update in promises way is done by appendFile method
// its takes two parameters , first is the file name and second is the data to be appended in the file
await fs.appendFile("test.txt", "\nKyaa Haal Hai") ;

// 4. Delete
// In file System , the delete in promises way is done by unlink method
// its takes one parameter , which is the file name to be deleted
await fs.unlink("test.txt")  // it will delete the file

// Creating folder in promises way
await fs.mkdir("test-folder")

// Deleting folder in promises way
await fs.rmdir("test-folder")


// We have more methods like renmae, copy, move etc. which can be used in promises way
// but they are not commonly used in real world applications
// Examples of these methods are rename, copyFile, etc.
// await fs.rename("test.txt", "test1.txt")  // it will rename the file
// await fs.copyFile("test1.txt", "test2.txt")  // it will copy the file


// Why we will use Promises methods in real world applications
// Because they are non-blocking in nature and they will not block the event loop until the current line of code is executed completely
// and this will lead to better performance of the application and it will be able to handle multiple requests at a time
// and this will lead to better user experience and it will be able to handle high traffic applications


// Main difference between Sync, Async and Promises way of file system module is that
//  Sync methods are blocking in nature,
//  Async methods are non-blocking in nature and
//  Promises methods are also non-blocking in nature 
//  but they are more readable and easier to use than Async methods.
