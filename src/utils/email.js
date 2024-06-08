
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'xabibullotoyrilmasov385@gmail.com',
        pass: process.env.emailpassword
    }
})


export const sendOtptoEmail = async (otpnumber, email) => {
    try{
        const info = await transport.sendMail({
            to: email,
            subject: process.env.emailsub,
            html: `
            Your verify code
            <h1>     ${otpnumber}     </h1>`
        });
    
        console.log("message send %s", info.messageId)

    } catch (err){
        console.log(err);
        throw err
    }
}

