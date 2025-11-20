import { useEffect, useState } from 'react'

const api = import.meta.env.VITE_BACKEND_URL

function EventCard({ e }) {
  return (
    <div className="group bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden hover:border-pink-500/40 transition">
      {e.cover_image && (
        <img src={e.cover_image} alt={e.title} className="w-full h-44 object-cover" />
      )}
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-pink-300/80">{e.status}</div>
        <h3 className="text-white font-semibold mt-1">{e.title}</h3>
        {e.date && <p className="text-slate-300 text-sm mt-1">{new Date(e.date).toLocaleDateString()}</p>}
        {(e.venue || e.city) && (
          <p className="text-slate-400 text-sm">{[e.venue, e.city].filter(Boolean).join(', ')}</p>
        )}
        {e.description && <p className="text-slate-300 text-sm mt-3 line-clamp-3">{e.description}</p>}
      </div>
    </div>
  )}

export default function Events() {
  const [live, setLive] = useState([])
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    async function fetchEvents() {
      try {
        const [l, u] = await Promise.all([
          fetch(`${api}/api/events?status=live`).then(r => r.json()),
          fetch(`${api}/api/events?status=upcoming`).then(r => r.json()),
        ])
        setLive(l)
        setUpcoming(u)
      } catch (e) {
        console.error('Failed to load events', e)
      }
    }
    fetchEvents()
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div id="live" className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Live now</h2>
        <a href="/events" className="text-sm text-pink-300 hover:text-pink-200">View all</a>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {live.length === 0 && (
          <div className="col-span-full text-slate-400">No live events at the moment.</div>
        )}
        {live.map((e) => (
          <EventCard key={e.id} e={e} />
        ))}
      </div>

      <div id="upcoming" className="flex items-end justify-between gap-4 mt-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Upcoming</h2>
        <a href="/events" className="text-sm text-pink-300 hover:text-pink-200">View all</a>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcoming.length === 0 && (
          <div className="col-span-full text-slate-400">Nothing scheduled yet. Check back soon.</div>
        )}
        {upcoming.map((e) => (
          <EventCard key={e.id} e={e} />
        ))}
      </div>
    </section>
  )
}
