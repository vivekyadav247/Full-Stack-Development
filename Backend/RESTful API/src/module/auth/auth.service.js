import ApiError from "../../common/utils/api-error.js"
import ApiResponses from "../../common/utils/api-responses.js"
import { generateAccessToken, verifyAccessToken,generateRefreshToken,verifyRefreshToken,generateResetToken } from "../../common/utils/jwt.utils.js";
import User from "./auth.model.js"

import cookie from "cookie-parser"
import crypto from "crypto"

import fs from "node:fs" ;
import imagekit from "../../common/config/imagekit.js" ;

const hashedtoken = (token) => {crypto.createHash("sha256").update(token).digest("hex")};

const register = async (req)=> {
    
    const existing = await User.findOne({email: req.email})
    if(existing) throw ApiResponses.conflict(res,"Email already exisits");

    const {rawToken, hashedToken} = generateResetToken()

    const user = await User.create({
        name: req.name,
        email: req.email,
        password: req.password,
        role: req.role,
        verificationToken: hashedToken
    })

    try{
        await sendVerificationEmail(user.email, rawToken);
    } catch(err){
        throw ApiError.internal("Failed to send verification email") ;
    }

    const userObj = user.toObject()
    delete userObj.password
    delete userObj.verificationToken

    return userObj
}

const login = async ({email, password}) => {
    const user = await User.findOne({email}).select("+password") ;
    if(!user) throw ApiError.notFound("User not found");

    // I will check Password
    const isMatch = await user.comparePassword(password) ;
    if(!isMatch) throw ApiError.unauthorized("Invalid credentials");

    // if(!isVerified(user)) throw ApiError.unauthorized("User not verified");

    const accessToken = generateAccessToken({id: user._id, role: user.role});
    const refreshToken = generateRefreshToken({id: user._id, role: user.role});

    user.refreshToken = hashedtoken(refreshToken);
    await user.save(validateBeforeSave=false);

    const userObj = user.toObject();
    delete userObj.password;
    delete userObj.refreshToken;
    
    cookie.sign(accessToken, {httpOnly: true, maxAge: 1000 * 60 * 60}) ;
    return { accessToken, refreshToken, user: userObj };
}

const refresh = async (token) => {
    if(!token) throw ApiError.unauthorized("Refresh token missing") ;

    const decoded = verifyRefreshToken(token) ;

    const user = await User.findById(decoded.id).select("+refreshToken") ;
    if(!user) throw ApiError.notFound("User not found") ;

    if(user.refreshToken !== hashedtoken(token)) throw ApiError.unauthorized("Refresh token mismatch") ;

    const accessToken = generateAccessToken({id: user._id, role: user.role});
    const refreshToken = generateRefreshToken({id: user._id, role: user.role});

    user.refreshToken = hashedtoken(refreshToken);
    await user.save(validateBeforeSave=false);

    cookie.sign(accessToken, {httpOnly: true, maxAge: 1000 * 60 * 60}) ;
    return {accessToken, refreshToken} ;
}

const logout = async (userid) => {
    const user = await User.findById(userid, {refreshToken: null}) ;
}

const verifyUser = async (token) => {
    const hashToken = hashedtoken(token) ;
    const user = await User.findOne({verificationToken: hashToken}).select("+verificationToken") ;
    if(!user) throw ApiError.badRequest("Invalid token") ;

    user.isVerified = true ;
    user.verificationToken = undefined ;
    await user.save(validateBeforeSave=false) ;
    return user ;
}

const forgotPassword = async (email) => {
    const user = await User.findOne({email}) ;
    if(!user) throw ApiError.notFound("User not found") ;

    const {rawToken, hashedToken} = generateResetToken() ;

    user.resetPasswordToken = hashedToken ;
    user.resetPasswordExpires = Date.now() + 1000 * 60 * 10 ; // 10 minutes
    await user.save(validateBeforeSave=false) ;
    // TODO: send an email to user with token: rawToken
}

const newPassword = async (token, password) => {
    const hashedToken = hashedtoken(token) ;
    const user = await User.findOne({resetPasswordToken: hashedToken, resetPasswordExpires: {$gt: Date.now()}}) ;
    if(!user) throw ApiError.badRequest("Invalid or expired token") ;

    user.password = password ;
    user.resetPasswordToken = undefined ;
    user.resetPasswordExpires = undefined ;
    await user.save(validateBeforeSave=false) ;

    return {message: "Password reset successful"} ;
}

const getMe = async (userId) => {
    const user = await User.findById(userId) ;
    if(!user) throw ApiError.notFound("User not found") ;
    const userObj = user.toObject() ;
    delete userObj.password ;
    delete userObj.refreshToken ;
    return userObj ;
}

const avatarUpload = async (userId, file) => {
    const user = await User.findById(userId) ;
    if(!user) throw ApiError.notFound("User not found") ;

    try{
        const fileStream = fs.createReadStream(file.path);
        const uploadResponse = await imagekit.upload({
            file: fileStream,
            fileName: file.filename,
            folder: "/avatars"
        })
        const avatarUrl = uploadResponse.url;

        await User.findByIdAndUpdate(userId, {avatar: avatarUrl}, {new: true}) ;

        fs.unlinkSync(file.path) ; // Delete the file from local storage after successful upload

        return {avatarUrl} ;

    }catch(err){
        try{
            if(file.path && fs.existsSync(file.path)){
                fs.unlinkSync(file.path) ; // Delete the file
            }
        } catch(err){
            console.error("Error occurred while deleting the file:", err);
        }
        throw ApiError.internal("Failed to upload avatar") ;
    }

}

export {register, login, refresh, logout, forgotPassword, newPassword, verifyUser, getMe, avatarUpload} ;