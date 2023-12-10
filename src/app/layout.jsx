import App from '@/components/App'
import './globals.css'
import { Inter } from 'next/font/google'
import { StoreProvider } from '@/redux/StoreProvider'
import { NextAuthProvider } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MYTH shopping mall',
  description: '신화창조에서 제작한 쇼핑몰입니다.',
}

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <StoreProvider>
            <App>{children}</App>
          </StoreProvider>
        </body>
      </html>
    </NextAuthProvider>
  )
}
