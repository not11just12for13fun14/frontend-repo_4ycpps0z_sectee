import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const api = import.meta.env.VITE_BACKEND_URL

export default function GalleryPage() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`${api}/api/gallery`).then(r => r.json()).then(setItems).catch(console.error)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-20 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Gallery</h1>
        <p className="text-slate-300 mt-2">Moments from our stage and studio.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((g) => (
            <div key={g.id} className="group overflow-hidden rounded-lg border border-white/10 bg-slate-800/40">
              <img src={g.image_url} alt={g.title} className="aspect-square w-full object-cover group-hover:scale-105 transition" />
              <div className="p-2 text-sm text-slate-300">{g.title}</div>
            </div>
          ))}
          {items.length === 0 && <div className="text-slate-400">No images yet.</div>}
        </div>
      </main>
      <Footer />
    </div>
  )
}
