import express from "express"
import cookieParser from "cookie-parser" ;

import path from "path" ;
import {fileURLToPath} from "url" ;


import authRouter from "./module/auth/auth.router.js" ;
import ApiError from "./common/utils/api-error.js" ;
import errorHandler from "./common/middleware/error.middleware.js" ;
import ApiResponse from "./common/utils/api-responses.js" ;

import multer from "multer" ;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json()) ;
app.use(express.urlencoded({extended: true})) ;
app.use(cookieParser()) ;


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const ext = path.extname(file.originalname) ;
    cb(null, file.fieldname + '-' + uniqueSuffix + ext)
  }
})

// const storage = multer.memoryStorage() ;



const upload = multer({
    storage,
    limits:{
        fileSize: 1024 * 1024 * 5 // 5mb
    },
    fileFilter: (req, file, cb) => {
        const allowed = ["image/jpeg", "image/png", "image/jpg"] ;

        if(!allowed.includes(file.mimetype)){
            return cb(new ApiError(400, "Only .jpg, .jpeg and .png format allowed!"), false) ;
        }
    }
});

app.post("/upload", upload.array("photos"), (req, res) => {
    console.log(req.files.buffer) ;
    ApiResponse.ok(res, req.files, "File Uploaded Successfully") ;
})



app.use("/api/auth", authRouter) ;

app.all("{*path}", (req, res) => {
    throw ApiError.notFound(`Route ${req.originalUrl} Not Found`) ;
}) ;

app.use(errorHandler) ;



export default app