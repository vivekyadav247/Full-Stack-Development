import * as authService from "./auth.service.js"
import ApiResponse from "../../common/utils/api-responses.js"

const register = async (req, res) => {
    const user = await authService.register(req.body)
    ApiResponse.created(res, "Registration success", user)    
}

const login = async (req, res) => {
    const {accessToken, refreshToken, user} = await authService.login(req.body) ;
    res.cookie("accessToken", accessToken, {httpOnly: true, maxAge: 1000 * 60 * 60}) ;
    res.cookie("refreshToken", refreshToken, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7}) ;
    ApiResponse.ok(res, "Login success", {accessToken, refreshToken, user}) ;
}

const logout = async (req, res) => {
    await authService.logout(req.user.id) ;
    res.clearCookie("accessToken") ;
    res.clearCookie("refreshToken") ;
    ApiResponse.ok(res, "Logout success") ;
}

const getMe = async (req, res) => {
    const user = await authService.getMe(req.user.id) ;
    ApiResponse.ok(res, "User fetched successfully", user) ;
}

const verifyUser = async (req, res) => {
    const user = await authService.verifyUser(req.params.token) ;
    ApiResponse.ok(res, "User verified successfully", user) ;
}

const uploadAvatar = async (req, res) => {
    try{
        const file = req.file ;

        if(!file){
            return ApiResponse.badRequest(res, "No file uploaded") ;
        }

        const result = await authService.avatarUpload(req.user.id, file) ;

        return ApiResponse.ok(res, "Avatar uploaded successfully", result.avatarUrl) ;

    }catch(err){
        ApiResponse.internalServerError(res, "Error uploading avatar") ;
    }
}

export {register, login, logout, getMe, verifyUser, uploadAvatar}