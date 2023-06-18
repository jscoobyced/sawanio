import Menu from "./components/Menu"

const RootLayout = ({children,}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Menu />
        <main className="mb-auto">
        {children}
        </main>
        <footer className="flex justify-center">Sawan.io &copy; 2023 IndyTheDog</footer>
        </body>
    </html>
  )
}

export default RootLayout
