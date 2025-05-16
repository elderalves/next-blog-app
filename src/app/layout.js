import { Navigation } from "@/components/Navigation"
import { cookies } from "next/headers"
import { Inter } from 'next/font/google'
import Image from "next/image";
import logo from './logo.png'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: 'Full-Stack Next.js Blog',
  description: 'A full-stack blog application built with Next.js, Prisma',
}

async function logoutAction() {
  'use server'

  cookies().delete('AUTH_TOKEN')
}

export default function RootLayout({ children }) {

  const user = { username: 'dan' }

  return (
    <html lang="en" className={inter.className}>
      <body>
        <Image 
          src={logo}
          alt='Full-Stack Next.js Blog Logo'
          width={500}
          height={150}
        />
        <nav>
          <Navigation username={user?.username} logoutAction={logoutAction} />
        </nav>
        <br/>
        <main>{children}</main>
      </body>
    </html>
  )
}