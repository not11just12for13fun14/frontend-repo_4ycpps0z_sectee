import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const api = import.meta.env.VITE_BACKEND_URL

export default function PublicationsPage() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`${api}/api/publications`).then(r => r.json()).then(setItems).catch(console.error)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-20 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Publications</h1>
        <p className="text-slate-300 mt-2">Books, research and articles from our collective.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((p) => (
            <a key={p.id} href={p.link} target="_blank" className="group block p-5 rounded-xl border border-white/10 bg-slate-800/40 hover:border-pink-500/40 transition">
              <div className="text-white font-semibold">{p.title}</div>
              {p.authors?.length > 0 && <div className="text-slate-400 text-sm mt-1">{p.authors.join(', ')}</div>}
              {p.year && <div className="text-slate-500 text-xs mt-1">{p.year}</div>}
              {p.summary && <p className="text-slate-300 text-sm mt-3 line-clamp-3">{p.summary}</p>}
            </a>
          ))}
          {items.length === 0 && <div className="text-slate-400">No publications yet.</div>}
        </div>
      </main>
      <Footer />
    </div>
  )
}
