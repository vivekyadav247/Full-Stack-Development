import fs from "node:fs" ;
import { encode } from "node:punycode";

// Sync File System Module
// In file System , the sync way is done by using Sync methods 
// Sync methods are blocking in nature ,
//  means the next line of code will not be executed
//  until the current line of code is executed completely
// It use when we want to execute the code in a sequential manner 
// and we don't want to use callback functions or promises


// 1. write 
// In file System , the write in sync way is done by writeFileSync method
// its takes two parameters , first is the file name and second is the data to be written in the file
// fs.writeFileSync("test.txt", "Hello From Sync FS ! 2")

// 2. Read 
// In file System , the read in sync way is done by readFileSync method
// its takes two parameters , first is the file name and second is the encoding type
// let data = fs.readFileSync("test.txt", "utf-8")  // it will return the data in buffer format
// console.log(data) 

// 3. Update
// In file System , the update in sync way is done by appendFileSync method
// its takes two parameters , first is the file name and second is the data to be appended in the file
// fs.appendFileSync("test.txt", "\nKyaa Haal Hai")

// 4. Delete
// In file System , the delete in sync way is done by unlinkSync method
// its takes one parameter , which is the file name to be deleted
// fs.unlinkSync("test.txt")  // it will delete the file

// Creating folder in Sync way
// In file System , the folder creation in sync way is done by mkdirSync method
// its takes two parameters , first is the folder name and second is an object which contains the recursive property
// and recursice true it provide the ability to create nested folders in a single command
// fs.mkdirSync("myFolder/innerFolder", {recursive: true}) ;

// We have more methods like renmae, copy, move etc. which can be used in sync way 
// but they are not commonly used in real world applications
// Examples of these methods are renameSync, copyFileSync, etc.
// fs.renameSync("test.txt", "test1.txt")  // it will rename the file
// fs.cpSync("test1.txt", "test2.txt")  // it will copy the file


// Deleting folder in Sync way
// In file System , the folder deletion in sync way is done by rmdirSync method
// its takes two parameters , first is the folder name and second is an object which contains the recursive property
// and recursice true it provide the ability to delete nested folders in a single command
// fs.rmdirSync("myFolder", {recursive: true}) ;

// Why we will note use Synchornous methods in real world applications
// Because they are blocking in nature and they will block the event loop until the current line of code is executed completely
// and this will lead to poor performance of the application and it will not be able to handle multiple requests at a time
// and this will lead to poor user experience and it will not be able to handle high traffic applications