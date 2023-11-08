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
        case 'GET':
            return checkJWT(req, res)

        default:
            res.status(400).json({
                message: 'Bad Request'
            })
    }
}

const checkJWT = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { token = '' } = req.cookies
    // console.log(token)
    let userId = ''

    try {
        userId = await jwt.isValidToken(token)
        // console.log(userId)
    } catch (error) {
        res.status(401).json({
            message: 'El token de autorización no es válido'
        })
    }

    await db.connect()

    const user = await User.findById(userId).lean()
    await db.disconnect()

    // console.log(user)
    if (!user) {
        return res.status(400).json({
            message: 'No existe este usuario con ese id'
        })
    }

    const { role, name, _id, email } = user

    return res.status(200).json(
        {
            token: jwt.signToken(_id, email),
            user: {
                email, role, name
            }
        }
    )
}
