import jwt from "jsonwebtoken";


export const signToken = (_id: string, email: string) => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error('No hay semilla JWT- ENV')
    }

    return jwt.sign(
        //payload
        {
            _id, email
        },
        //seed
        process.env.JWT_SECRET_SEED,
        //Opciones
        { expiresIn: '30d' }
    )
}

export const isValidToken = (token: string): Promise<string> => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error('No hay semilla JWT- ENV')
    }
    // console.log(token)
    return new Promise((resolve, reject) => {
        try {
            // console.log(token)
            jwt.verify(token, process.env.JWT_SECRET_SEED || '', (err, payload) => {
                if (err) return reject('JWT no es válido')

                const { _id } = payload as { _id: string }

                resolve(_id)
                // console.log(_id)
            })
        } catch (error) {
            reject('JWT no es válido')
        }
    })
}