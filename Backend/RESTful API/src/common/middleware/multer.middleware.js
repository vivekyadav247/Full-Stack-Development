import multer from "multer" ;
import path from "path" ;

import ApiError from "../utils/api-error.js" ;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const ext = path.extname(file.originalname) ;
    cb(null, file.fieldname + '-' + uniqueSuffix + ext)
  }
});

const fileFilter = (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/jpg", "image/webp", "image/gif"] ;

    if(!allowed.includes(file.mimetype)){
        return cb(new ApiError(400, "Only .jpg, .jpeg, .png, .webp and .gif format allowed!"), false) ;
    }
    cb(null, true) ;
}

export const upload = multer({
    storage,
    limits:{
        fileSize: 1024 * 1024 * 5 // 5mb
    },
    fileFilter: fileFilter
}) ;