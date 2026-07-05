import crypto from "crypto";
import jwt from "jsonwebtoken";


const generateAccessToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: process.env.JWT_ACCESS_EXPIRE_IN || '15m'})
    return token;
}

const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET)
}

const generateRefreshToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: process.env.JWT_REFRESH_EXPIRE_IN || '1d'})
    return token;
}

const verifyRefreshToken = (token) => {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET)
}


const generateResetToken = () => {
    const rawToken = crypto.randomBytes(32).toString("hex");
    const hashedtoken = crypto.createHash("sha256").update(rawToken).digest("hex");

    return {rawToken, hashedtoken}  
}

export {
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    generateResetToken
}