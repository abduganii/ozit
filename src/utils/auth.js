import GoogleProvider from "next-auth/providers/google";
import Github from "next-auth/providers/github";
export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: '311990013045-kuat36jlivpd7ltm6i8vslna4341anhj.apps.googleusercontent.com',
            clientSecret: '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'
        }),
        Github({
            clientId: '69148f5c7fef7d196420',
            clientSecret: 'be92f44605ee585997e54a376ca3d62f390d9c68'
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            session.user.id = token.id;
            session.accessToken = token.accessToken;
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.id = user.id;
            }
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
    },
}