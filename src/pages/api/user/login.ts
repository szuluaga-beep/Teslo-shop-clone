import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database';
import { User } from '../../../../models';

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
            return loginUser(req, res)

        default:
            res.status(400).json({
                message: 'Bad Request'
            })
    }
}

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { email = '', password = '' } = req.body

    await db.connect()

    const user = await User.findOne({ email })
    await db.disconnect()

    if (!user) {
        return res.status(400).json({
            message: 'Correo o contraseña no válidos - EMAIL'
        })
    }

    if (!bcrypt.compareSync(password, user.password!)) {
        return res.status(400).json({
            message: 'Correo o contraseña no válidos - PASSWORD'
        })

    }

    const { role, name } = user

    return res.status(200).json(
        {
            token: '',
            user: {
                email, role, name
            }
        }
    )
}
