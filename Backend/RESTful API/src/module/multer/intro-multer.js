// What is Multer ?
// Multer is a middleware for handling multipart/form-data,
// which is primarily used for uploading files.
// It is written on top of busboy for maximum efficiency.


// Why we need Multer ?
// When user upload a file to the server which is in a multipart/form-data format.
// You can't access the file directly from the request object,
// because the file is not stored in the request body.
// So, we need a middleware to handle the multipart/form-data format,
// and Multer is the most popular middleware for this purpose.
// It is used to handle the file upload in Node.js and Express.js applications.
// it parses the multipart/form-data format and makes 
// the file available in the request object.


// File is a collection of binary data on disk.
// File type is defined by the file extension and the MIME type.
// file extension is the part of the file name after the last dot (.)
// and it is used to identify the file type.
// MIME type is a standard way of classifying file types on the Internet.
// It is available in two parts , Type and Subtype. 
// For example, the MIME type of a JPEG image is image/jpeg.

// How Multer works ?
// Multer adds a body object and a file or files object to the request object.
// The body object contains the values of the text fields of the form,
// the file or files object contains the files uploaded via the form.
// The file or files object is an array of objects, 
// each object contains information about the file uploaded via the form.