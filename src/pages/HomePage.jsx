import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Events from '../components/Events'
import Footer from '../components/Footer'

export default function HomePage() {
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
