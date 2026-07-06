import * as authService from "./auth.service.js"
import ApiResponse from "../../common/utils/api-response.js"

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

export {register, login, logout, getMe}