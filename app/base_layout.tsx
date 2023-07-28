import Menu from "./components/Menu"

const RootLayout = ({children,}: {children: React.ReactNode}) => {
  const version = process.env.GIT_TAG || "unknown"
  return (
    <html lang="en">
      <body className="flex flex-col h-screen bg-primary-bg text-primary-color">
        <Menu />
        <main className="mb-auto">
        {children}
        </main>
        <footer className="flex justify-center pb-2">Sawan.io &copy; 2023 IndyTheDog - {version}</footer>
        </body>
    </html>
  )
}

export default RootLayout
