import GoogleProvider from "next-auth/providers/google";
import Github from "next-auth/providers/github";
export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: '696542554767-mp57vtft14gq1df24p4mcrool8ki78rd.apps.googleusercontent.com',
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
            session.id_token = token.id_token;
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.id = user.id;
            }
            if (account) {
                token.accessToken = account.access_token;
                token.id_token = account.id_token;
            }
            return token;
        },
    },
}