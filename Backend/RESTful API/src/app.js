import express from "express"
import cookieParser from "cookie-parser" ;

import path from "path" ;
import {fileURLToPath} from "url" ;


import authRouter from "./module/auth/auth.router.js" ;
import ApiError from "./common/utils/api-error.js" ;
import errorHandler from "./common/middleware/error.middleware.js" ;
import ApiResponse from "./common/utils/api-responses.js" ;
import * as multerFile from "./module/multer/practical-multer.js" ;

import multer from "multer" ;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json()) ;
app.use(express.urlencoded({extended: true})) ;
app.use(cookieParser()) ;

app.post("/upload", multerFile.uploadSingle, (req, res) => {
    console.log(req.file) ;
    ApiResponse.ok(res, req.file, "File Uploaded Successfully") ;
}) ;

app.post("/upload-disk", multerFile.uploadSingleDisk, (req, res) => {
    console.log(req.file) ;
    ApiResponse.ok(res, req.file, "File Uploaded Successfully") ;
}) ;

app.post("/upload-memory", multerFile.uploadSingleMemory, (req, res) => {
    console.log(req.file.buffer) ;
    saveFileToDisk(req.file.buffer, req.file.originalname) ;
    ApiResponse.ok(res, "File Uploaded Successfully") ;
}) ;

app.post("/upload-multiple", multerFile.uploadMultiple, (req, res) => {
    console.log(req.files) ;
    ApiResponse.ok(res, req.files, "Files Uploaded Successfully") ;
}) ;

app.post("/upload-multiple-disk", multerFile.uploadMultipleDisk, (req, res) => {
    console.log(req.files) ;
    ApiResponse.ok(res, req.files, "Files Uploaded Successfully") ;
}) ;

app.post("/upload-multiple-memory", multerFile.uploadMultipleMemory, (req, res) => {
    console.log(req.files) ;
    req.files.forEach(file => {
        saveFileToDisk(file.buffer, file.originalname) ;
    }) ;
    ApiResponse.ok(res, "Files Uploaded Successfully") ;
}) ;

app.post("/upload-multiple-fields", multerFile.uploadMutlipleFields, (req, res) => {
    console.log(req.files) ;
    ApiResponse.ok(res, req.files, "Files Uploaded Successfully") ;
}) ;

app.post("/upload-multiple-fields-disk", multerFile.uploadMutlipleFieldsDisk, (req, res) => {
    console.log(req.files) ;
    ApiResponse.ok(res, req.files, "Files Uploaded Successfully") ;
}) ;

app.post("/upload-multiple-fields-memory", multerFile.uploadMutlipleFieldsMemory, (req, res) => {
    console.log(req.files) ;
    req.files.file1.forEach(file => {
        saveFileToDisk(file.buffer, file.originalname) ;
    }
    ) ;
    req.files.file2.forEach(file => {
        saveFileToDisk(file.buffer, file.originalname) ;
    }
    ) ;
    ApiResponse.ok(res, "Files Uploaded Successfully") ;
}) ;

app.post("/upload-validation", multerFile.uploadSingleDiskValidated, (req, res) => {
    console.log(req.file) ;
    ApiResponse.ok(res, req.file, "File Uploaded Successfully") ;
}) ;

app.use("/api/auth", authRouter) ;

app.all("{*path}", (req, res) => {
    throw ApiError.notFound(`Route ${req.originalUrl} Not Found`) ;
}) ;

app.use(errorHandler) ;



export default app