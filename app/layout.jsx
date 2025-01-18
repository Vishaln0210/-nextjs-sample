import '@styles/globals.css';
import '@components/Nav'
import '@components/Provider'
export const metadata =  {
    title : "PrompTopia",
    description: 'Discover and share AI Prompts'
}
const RootLayout = ({ children }) => {
  return (
    <html lang = "en">
        <body>
        <div className = "main">
            <div className = "gradient"/>
        </div>
        
        <main className = "app">
          <Nav/>
            { children }
        </main>
        </body>
    </html>
  )
}

export default RootLayout
