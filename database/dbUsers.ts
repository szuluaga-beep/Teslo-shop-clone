import bcrypt from 'bcryptjs';
import { db } from "."
import { User } from "../models"

export const checkEmailUser = async (email: string, password: string) => {
    await db.connect()
    const user = await User.findOne({ email })
    await db.disconnect()

    if (!user) {

        return null
    }

    if (!bcrypt.compareSync(password, user.password!)) {
        return null
    }

    const { role, _id, name } = user

    return {
        _id,
        email: email.toLowerCase(),
        name,
        role

    }
}