import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Events from '../components/Events'

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Events</h1>
          <p className="text-slate-300 mt-2">Live shows, upcoming performances, and workshops.</p>
        </div>
        <Events />
      </main>
      <Footer />
    </div>
  )
}
