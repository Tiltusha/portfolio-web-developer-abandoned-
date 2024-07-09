import NextAuth from "next-auth/next"
import type { AuthOptions, User } from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                password: { label: 'password', type: 'password', required: true }
            },
            async authorize(credentials) {
                if (!credentials?.email &&!credentials?.password) {
                    return null
                }
                const currentUser = users.find(user => user.email === credentials?.email)

                if (currentUser && currentUser.password === credentials?.password) {
                    const {password, ...userWithoutPass} = currentUser;

                    return userWithoutPass as User; 
                } 
            }
        })
    ],
    pages: {
        signIn: "/login",
    }
}