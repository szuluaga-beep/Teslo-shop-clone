import * as jose from "jose";


const secret = new TextEncoder().encode(
    process.env.JWT_SECRET_SEED,
)

export const signToken = async (_id: string, email: string) => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error('No hay semilla JWT- ENV')
    }

    const jwt = await new jose.SignJWT()
        .setProtectedHeader({ alg: 'HS256' })
        .setJti(_id)
        .setSubject(email)
        .setExpirationTime('30d')
        .sign(secret)

    return jwt
}

export const isValidToken = async (token: string): Promise<string> => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error('No hay semilla JWT- ENV')
    }
    // console.log(token)
    return new Promise(async (resolve, reject) => {
        try {
            const verified = await jose.jwtVerify(
                token,
                secret
            )
            // console.log(verified.payload)
            resolve(verified.payload.jti || '')

        } catch (err) {
            // throw new AuthError('Your token has expired.')
            reject(new Error('Invalid Token'))
        }
    });


}