import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { dbUSers } from "../../../../database";

export default NextAuth({
    providers: [
        CredentialsProvider({
            // The credentials provider is the most flexible, but also the most complex. It allows you to implement your own authentication strategy using a custom API route
            name: 'Custom login',
            credentials: {
                email: { label: 'Email', placeholder: 'ejemplo@google.com', type: 'email' },
                password: { label: 'Contraseña', placeholder: 'Contraseña', type: 'password' }
            },
            async authorize(credentials) {

                console.log(credentials)
                // return { id: '1', name: "J Smith", correo: "jsmith@example.com", role: 'admin' }

                return await dbUSers.checkEmailUser(credentials!.email, credentials!.password)
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    secret: process.env.NEXT_SECRET,
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/register'
    },
    session: {
        maxAge: 2592000,//30 días
        strategy: 'jwt',
        updateAge: 86400 //24 horas
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (account) {
                token.accessToken = account.access_token

                switch (account.type) {
                    case 'oauth':
                        //TODO:
                        break;
                    case 'credentials':
                        token.user = user
                        break;
                }
            }

            return token
        },
        async session({ session, user, token }) {
            session.accessToken = token.accessToken as string;
            session.user = token.user as any;

            return session;

        },
    }

})