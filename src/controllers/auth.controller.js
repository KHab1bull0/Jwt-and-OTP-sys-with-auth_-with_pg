import otpGenerator from 'otp-generator'
import bcrypt from 'bcrypt'
import { userValidation } from "../validation/auth.valid.js";
import { otpValidation } from "../validation/opt.valid.js";
import { sendOtptoEmail } from "../utils/email.js";
import { accessTokenGenerator, refreshTokenGenerator, tokenVerify } from "../utils/jwt.js";
import { insertRefreshToken, createOtp, createUser, getUser, univerGetFunc, updateRefreshToken } from '../services/user.service.js';
import { getAll, getOneVarchar, getOneInt, putOne, deleteOneVarchar, deleteOneInt } from '../services/univer.service.js';



export const signUpUser = async (req, res) => {
    try {
        const otpnumber = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
        const body = await userValidation(req.body);

        await createUser(body.email, body.password, body.role);
        await createOtp(req.body.email, otpnumber);

        const otpResponse = await sendOtptoEmail(otpnumber, req.body.email);

        return res.status(200).send({
            message: "User created and send verify code to your email!",
            otp_message: otpResponse
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Xatolik",
            error: err
        });
    };
};

export const signInUser = async (req, res) => {
    try {
        const validData = await userValidation(req.body);
        const user = await getUser(validData.email);

        if (!user) {
            return res.status(400).send({
                error: "User not found"
            });
        };

        const data = await bcrypt.compare(validData.password, user.password);

        if(!data){
            return res.status(400).send({
                message: "Password incorrect"
            });
        }
        
        const accessToken = accessTokenGenerator({email: user.email, role: user.role});
        const refreshToken = refreshTokenGenerator({email: user.email, role: user.role});
        
        const info = await univerGetFunc('refreshtoken', 'email', validData.email);
        if(!info){
            const insertInfo = await insertRefreshToken(validData.email, refreshToken);
        } else {
            const updataInfo = await updateRefreshToken(validData.email, refreshToken);
        }

        return res.status(200).send({
            message: "Ok",
            accessToken: accessToken,
            refreshToken: refreshToken
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Xatolik",
            error: err
        });
    };
}

export const getMeUser = async (req, res) => {
    try {

        const userInfo = req.user;
        console.log(userInfo)
        const data = await getUser(userInfo.email);
        
        return res.status(200).send({
            data: data,
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Xatolik",
            error: err
        });
    };
}

export const getallUsers = async (req, res) => {
    try {

        const users = await getAll('users');

        return res.status(200).send({
            data: users
        })

    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Xatolik",
            error: err
        })
    }
}

export const logoutUser = async (req, res) => {
    try {

        const userInfo = req.user
        const updateInfo = await putOne('users', 'status', false, 'email', userInfo.email);

        return res.status(200).send({
            message: "Logout successfully",
            data: updateInfo
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Xatolik",
            error: err
        });
    };
}


export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await getOneInt('users', 'id', id);
        console.log(user);

        const deleteInfo = await deleteOneInt('users', 'id', id);
        console.log(deleteInfo);

        const otpInfo = await deleteOneVarchar('otps', 'email', user[0].email);
        return res.status(200).send({
            message: "Deleted successfully",
            user: user
        })

    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Xatolik",
            error: err
        });
    };
}

// export const checkOtp = async (req, res) => {
//     try {
//         await otpValidation(req.body);
//         const { email, otp } = req.body;
//         const user = await findOtp(email);

//         if (user == null) {
//             return res.status(422).send({
//                 message: "This user's otp does not exist"
//             })
//         }

//         if (user.otpCode !== otp) {
//             return res.status(422).send({
//                 message: "Invalid OTP"
//             });
//         };

//         await deleteOtp(email);
//         await updateUserStatus(email);
//         return res.status(200).send({
//             message: "Foydalanuvchi tasdiqlandi!"
//         })

//     } catch (error) {
//         console.log(error);
//         return res.status(500).send({
//             message: "Xatolik",
//             error: error
//         });
//     }
// }