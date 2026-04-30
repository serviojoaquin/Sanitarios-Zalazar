import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handleNavigation = () => setPathname(window.location.pathname)

    window.addEventListener('popstate', handleNavigation)

    const handleDocumentClick = (event) => {
      const link = event.target.closest('a')
      if (!link) return

      const href = link.getAttribute('href')
      if (!href || href.startsWith('http') || href.startsWith('#') || link.target === '_blank') {
        return
      }

      const nextUrl = new URL(link.href, window.location.origin)
      if (nextUrl.origin !== window.location.origin) return

      event.preventDefault()
      window.history.pushState({}, '', `${nextUrl.pathname}${nextUrl.hash}`)
      setPathname(nextUrl.pathname)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    document.addEventListener('click', handleDocumentClick)
    return () => {
      window.removeEventListener('popstate', handleNavigation)
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  const isStorePage = pathname === '/tienda'

  return (
    <div className="min-h-screen bg-ink text-white">
      <Navbar isStorePage={isStorePage} />
      {isStorePage ? <StorePage /> : <HomePage />}
      <WhatsAppButton />
    </div>
  )
}

export default App
