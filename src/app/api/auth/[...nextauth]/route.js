import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import connectMongoDB from '@/libs/mongodb'
import User from '@/models/user'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/signIn',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      const apiUrl = process.env.API_URL
      const { name, email } = user

      if (account.provider === 'google' || account.provider === 'github') {
        try {
          await connectMongoDB()
          const userExists = await User.findOne({ email })

          if (!userExists) {
            const userCreationResponse = await fetch(`${apiUrl}/api/user`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email }),
            })

            if (!userCreationResponse.ok) {
              console.error(
                'Failed to create user:',
                userCreationResponse.statusText
              )
              // 적절한 오류 처리
            }
          }

          const logResponse = await fetch(`${apiUrl}/api/log`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          })

          if (!logResponse.ok) {
            console.error('Failed to log user:', logResponse.statusText)
            // 적절한 오류 처리
          }
        } catch (error) {
          console.error('Error during sign-in:', error)
          // 적절한 오류 처리
        }
      }
      return user
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
