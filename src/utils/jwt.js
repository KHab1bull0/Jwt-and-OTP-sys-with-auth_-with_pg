import jwt from "jsonwebtoken"
import dotenv from 'dotenv';

dotenv.config();

export const accessTokenGenerator = (data) => {
  const accesToken = jwt.sign(data, process.env.ACCESS_SECRETKEY, { expiresIn: '10m' })
  return accesToken;
}

export const refreshTokenGenerator = (data) => {
  const accesToken = jwt.sign(data, process.env.REFRESH_SECRETKEY, { expiresIn: '30d' })
  return accesToken
}


export const tokenVerify = (token) => {
  const decoded = jwt.verify(token, process.env.ACCESS_SECRETKEY)
  return decoded
}
