import multer from "multer" ;
import path from "path" ;
import fs from "fs/promises" ;


const upload = multer() ;

const uploadSingle = upload.single("file") ;
// Here file is stored in memory and not in disk.
// for disk storage we can use multer.diskStorage() and for memory storage we can use multer.memoryStorage()

// Disk Storage 
// Here we can define the destination and filename for the uploaded file.
//  The destination is the folder where the file will be stored 
// and the filename is the name of the file that will be stored in the destination folder.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "src/module/multer/uploads/") ;
    },
    // filename is used to define unique name for the uploaded file. Here we are using Date.now() to generate a unique name for the file.
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) ;
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)) ;
    }
}) ;
const uploadDisk = multer({ storage: storage }) ;

const uploadSingleDisk = uploadDisk.single("file") ;


// Memory Storage
// Memory storage is used to store the file in memory and not in disk. The file will be available in req.file.buffer.
// this is useful when we want to process the file before storing it in disk or database. 
// For example, we can resize the image before storing it in disk or database.
// It store in RAM and not in disk. 
// So, it is faster than disk storage. But it is not suitable for large files as it can cause memory overflow.
const Storage = multer.memoryStorage() ;
const uploadMemory = multer({ storage: Storage }) ;
const uploadSingleMemory = uploadMemory.single("file") ;
// You can save buffer to disk or database using fs.writeFile() or any other method.
// Example: 
const saveFileToDisk = (buffer, filename) => {
    const filePath = path.join("src/module/multer/uploads/", filename) ;
    return fs.writeFile(filePath, buffer) ;
}

// Array is use for multiple files with same field name. 
// File can be uploaded with different file types like images, pdf, doc etc. But the field name should be same for all files.
const uploadMultiple  = upload.array("files", 10) ; // 10 is the maximum number of files that can be uploaded at once.
const uploadMultipleDisk = uploadDisk.array("files", 10) ;
const uploadMultipleMemory = uploadMemory.array("files", 10) ;



// Fields is used for multiple files with different field names.
// here Max control is used to limit the number of files that can be uploaded for each field name.
const uploadMutlipleFields = upload.fields([{ name: "file1", maxCount: 1 }, { name: "file2", maxCount: 1 }]) ; // for multiple files with different field names.
const uploadMutlipleFieldsDisk = uploadDisk.fields([{ name: "file1", maxCount: 1 }, { name: "file2", maxCount: 1 }]) ;
const uploadMutlipleFieldsMemory = uploadMemory.fields([{ name: "file1", maxCount: 1 }, { name: "file2", maxCount: 1 }]) ;

// Here We can Validate the file type and size before uploading the file.
//  We can use fileFilter option of multer to validate the file type and size.
const uploadDiskValidated = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: (req, file, cb) => {
        const allowed  = ["image/jpeg", "image/png", "application/pdf"] ;
        if(allowed.includes(file.mimetype)) {
            cb(null, true) ;
        } else {
            cb(new Error("Invalid file type")) ;
        }
    }
}) ; 
// Here we validate the file type and size before uploading the file. 
// If the file type is invalid or the file size is greater than 5MB, we will return an error message to the client.
const uploadSingleDiskValidated = async (req, res, next) => {
    await uploadDiskValidated.single("file")(req, res, (err) => {
        if(err?.code==="LIMIT_FILE_SIZE") {
            return res.status(400).json({ message: "File size should be less than 5MB" }) ;
        }
        else if(err?.message==="Invalid file type") {
            return res.status(400).json({ message: err.message }) ;
        }
        next() ;
    }) ;
}




export { uploadSingle , uploadSingleDisk , uploadSingleMemory , saveFileToDisk , uploadMultiple,
    uploadMultipleDisk , uploadMultipleMemory , uploadMutlipleFields , uploadMutlipleFieldsDisk , uploadMutlipleFieldsMemory,
uploadSingleDiskValidated } ;