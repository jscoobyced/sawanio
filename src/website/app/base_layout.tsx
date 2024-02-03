import Link from 'next/link'
import Menu from './components/Menu'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const version = process.env.GIT_TAG || 'unknown'
  const year = new Date().getFullYear()

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen h-auto bg-primary-bg text-primary-color">
        <Menu />
        <main className="mb-auto">{children}</main>
        <footer className="flex justify-center py-2 text-sm sm:text-base ">
          Sawan.io &copy; 2023-{year} IndyTheDog - {version} -
          <Link className="px-1 inline" href="/privacy">Privacy Policy</Link> -
          <Link className="px-1 inline" href="/tos">TOS</Link>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout
