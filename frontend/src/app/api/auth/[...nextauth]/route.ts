import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    // You can add more providers here
  ],
  // CRITICAL: This 'pages' object tells NextAuth.js where your login page is located.
  pages: {
    signIn: '/login',
  },
})

export { handler as GET, handler as POST }