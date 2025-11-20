import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const api = import.meta.env.VITE_BACKEND_URL

export default function WorksPage() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`${api}/api/works`).then(r => r.json()).then(setItems).catch(console.error)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-20 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Works</h1>
        <p className="text-slate-300 mt-2">Productions and original creations from our ensemble.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((w) => (
            <div key={w.id} className="rounded-xl overflow-hidden border border-white/10 bg-slate-800/40">
              {w.images?.[0] && <img src={w.images[0]} alt={w.title} className="w-full h-44 object-cover" />}
              <div className="p-4">
                <div className="text-white font-semibold">{w.title}</div>
                <div className="text-slate-400 text-sm">{w.type}{w.year ? ` • ${w.year}` : ''}</div>
                {w.description && <p className="text-slate-300 text-sm mt-3 line-clamp-3">{w.description}</p>}
              </div>
            </div>
          ))}
          {items.length === 0 && <div className="text-slate-400">No works yet.</div>}
        </div>
      </main>
      <Footer />
    </div>
  )
}
