import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Events from '../components/Events'
import Footer from '../components/Footer'

const api = import.meta.env.VITE_BACKEND_URL

export default function HomePage() {
  useEffect(() => {
    async function maybeSeed() {
      try {
        if (!api) return
        if (localStorage.getItem('tsn_seeded') === '1') return
        const live = await fetch(`${api}/api/events?status=live`).then(r => r.ok ? r.json() : [])
        const upcoming = await fetch(`${api}/api/events?status=upcoming`).then(r => r.ok ? r.json() : [])
        if ((live?.length || 0) + (upcoming?.length || 0) === 0) {
          await fetch(`${api}/api/seed`, { method: 'POST' })
        }
        localStorage.setItem('tsn_seeded', '1')
      } catch (e) {
        // silent fail
        console.warn('Seeding skipped:', e)
      }
    }
    maybeSeed()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Events />
      </main>
      <Footer />
    </div>
  )
}
