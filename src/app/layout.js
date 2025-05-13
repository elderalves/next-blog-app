import { Navigation } from "@/components/Navigation"
import { cookies } from "next/headers"

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
    <html lang="en">
      <body>
        <nav>
          <Navigation username={user?.username} logoutAction={logoutAction} />
        </nav>
        <br/>
        <main>{children}</main>
      </body>
    </html>
  )
}