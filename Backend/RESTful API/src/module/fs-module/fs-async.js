import fs from "node:fs" ;

// Async File System Module
// In file System , the async way is done by using async methods 
// Async methods are non-blocking in nature ,
//  means the next line of code will be executed
//  without waiting for the current line of code to be executed completely
// It use when we want to execute the code in a non-sequential manner 
// and we want to use callback functions or promises


// 1. write
// In file System , the write in async way is done by writeFile method
// its takes three parameters , first is the file name and second is the data to be written in the file
// The third parameter is a callback function which will be called once the file is written
fs.writeFile("test.txt", "Hello From Async FS ! 2", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File written successfully");
    }
});

// 2. Read
// In file System , the read in async way is done by readFile method
// its takes three parameters , first is the file name and second is the encoding type
// The third parameter is a callback function which will be called once the file is read
fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File read successfully");
        console.log(data);
    }
});

// 3. Update
// In file System , the update in async way is done by appendFile method
// its takes three parameters , first is the file name and second is the data to be appended in the file
// The third parameter is a callback function which will be called once the file is updated
fs.appendFile("test.txt", "\nKyaa Haal Hai", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File updated successfully");
    }
});

// 4. Delete
// In file System , the delete in async way is done by unlink method
// its takes two parameters , first is the file name and second is a callback function which will be called once the file is deleted
fs.unlink("test.txt", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File deleted successfully");
    }
});


// Creating folder in Async way
// In file System , the folder creation in async way is done by mkdir method
// its takes three parameters , first is the folder name and second is an object which contains the recursive property
// and recursice true it provide the ability to create nested folders in a single command
// The third parameter is a callback function which will be called once the folder is created
fs.mkdir("myFolder/innerFolder", { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Folder created successfully");
    }
});


// Deleting folder in Async way
// In file System , the folder deletion in async way is done by rmdir method
// its takes three parameters , first is the folder name and second is an object which contains the recursive property
// and recursice true it provide the ability to delete nested folders in a single command
// The third parameter is a callback function which will be called once the folder is deleted
fs.rmdir("myFolder", { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Folder deleted successfully");
    }
});


// In async we also have some method like rename, copy, move etc.
//  which can be used in async way
// but they are not commonly used in real world applications
// Examples of these methods are rename, copyFile, etc.
fs.rename("test.txt", "test1.txt", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File renamed successfully");
    }
});
fs.copyFile("test1.txt", "test2.txt", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File copied successfully");
    }
});


// Why we will not use Asynchronous methods in real world applications
// Because they are callback based and they will lead to callback hell 
// and it will be difficult to read and maintain the code

// Example of callback hell is when we have multiple nested callbacks

fs.readFile("test.txt", "utf-8", (err, data) => {
    fs.writeFile("test1.txt", data, (err) => {
        fs.appendFile("test1.txt", "\nKyaa Haal Hai", (err) => {
            fs.unlink("test.txt", (err) => {
                console.log("All operations completed successfully");
            });
        });
    });
});
// Here you can see that we have multiple nested callbacks 
// and it will be difficult to read and maintain the code
