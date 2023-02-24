import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

// interface GithubType {
//   clientId: any,
//   clientSecret: string
// }

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
}
export default NextAuth(authOptions)