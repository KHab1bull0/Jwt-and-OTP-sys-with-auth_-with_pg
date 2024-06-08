import bcrypt from 'bcrypt';

export const hashPassword = async(password) => {
    try{
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds);
        const hashPass = await bcrypt.hash(password, salt);
        return hashPass;
    } catch(err){
        throw err;
    }
}

