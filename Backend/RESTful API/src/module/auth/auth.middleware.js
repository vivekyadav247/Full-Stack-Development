import ApiError from "../../common/utils/api-error.js";
import User from "./auth.model.js";
import { verifyAccessToken } from "../../common/utils/jwt.utils.js";

const authenticate = async (req, res, next) => {
  let token ;
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    token = req.headers.authorization.split(" ")[1] ;
  }
  if(!token) throw ApiError.unauthorized("Access token missing") ;
  const decoded = await verifyAccessToken(token) ;
  if(!decoded) throw ApiError.unauthorized("Invalid access token") ;
  req.user = await User.findById(decoded.id);
  if(!req.user) throw ApiError.notFound("User not found") ;
  req.user = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    role: req.user.role
  }
  next() ;
}

const authorize = (...roles) => {
  return (req, res, next) => {
    if(!roles.includes(req.user.role)) throw ApiError.forbidden("You are not authorized to access this resource") ;
    next() ;
  }
}

export { authenticate, authorize };