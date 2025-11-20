import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-20 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">About Us</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-slate-300 leading-relaxed">
              We are a contemporary theatre studio based in Kathmandu, Nepal. Our work blends tradition with experimentation—developing new writing, devising original performances, and nurturing artists through training and residencies.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Through festivals, outreach, and partnerships, we aim to expand access to performing arts and amplify voices from across Nepal.
            </p>
          </div>
          <div className="bg-slate-800/40 border border-white/10 rounded-xl p-5">
            <div className="text-white font-semibold">Contact</div>
            <div className="text-sm text-slate-300 mt-2">Kathmandu, Nepal</div>
            <div className="text-sm text-slate-300">info@theatrestudionepal.org</div>
            <div className="text-sm text-slate-300">+977 98XXXXXXXX</div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white">Team</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-slate-800/40">
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-500/20 to-indigo-500/20" />
                <div className="p-4">
                  <div className="text-white font-semibold">Member {i}</div>
                  <div className="text-slate-400 text-sm">Performer</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
