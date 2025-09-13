import Link from "next/link"
import "./globals.css"

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio built with Next.js 13 App Router",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        <nav className="p-4 bg-gray-200 flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
// src/app/layout.js