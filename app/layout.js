import { Inter } from 'next/font/google'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Creso',
  description: 'Creso app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
