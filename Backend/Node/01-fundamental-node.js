const fs = require('fs');
const path = require('path');
const os = require('os');

// console.log("Node.JS : ", process.versions.node) ;
// console.log("V8 : ", process.versions.v8) ;
// console.log("Libuv : ", process.versions.uv) ;
// console.log("OpenSSL : ", process.versions.openssl) ;
// console.log("Platform : ", os.platform()) ;
// console.log("Architecture : ", os.arch()) ;
// console.log("CPU Cores : ", os.cpus().length) ;
// console.log("Free Memory : ", os.freemem()) ;
// console.log("Total Memory : ", os.totalmem()) ;
// console.log("Home Directory : ", os.homedir()) ;
// console.log("Current Working Directory : ", process.cwd()) ;

console.log(typeof global) ; // object
console.log(typeof globalThis) ; // object