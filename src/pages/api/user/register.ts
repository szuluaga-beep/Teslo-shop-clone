import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database';
import { User } from '../../../../models';
import { jwt } from "../../../../utils";

type Data =
    | { message: string; }
    | {
        token: string;
        user: {
            name: string;
            role: string;
            email: string;

        }
    }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'POST':
            return registerUser(req, res)

        default:
            res.status(400).json({
                message: 'Bad Request'
            })
    }
}

const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { email = '', password = '', name = '' } = req.body as { email: string; password: string; name: string }


    if (password.length < 6) {
        return res.status(400).json({
            message: 'la contraseña debe ser mayor a 6 caracteres'
        })
    }
    if (name.length < 2) {
        return res.status(400).json({
            message: 'El nombre debe de ser de al menos de 2 caracteres'
        })
    }
    await db.connect()

    const user = await User.findOne({ email })

    if (user) {
        return res.status(400).json({
            message: 'El correo ya existe'
        })
    }

    const newUser = new User({
        email: email.toLowerCase(),
        password: bcrypt.hashSync(password),
        name,
        role: 'client'
    })

    try {
        await newUser.save({ validateBeforeSave: true })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Revisar errores del servidores'
        })
    }

    const { _id, role } = newUser

    const token = jwt.signToken(_id, email)

    return res.status(200).json(
        {
            token,
            user: {
                email, role, name
            }
        }
    )
}
