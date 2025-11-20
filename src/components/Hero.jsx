import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[40%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.14),transparent_60%)]" />
        <div className="absolute -inset-[80%] rotate-45 bg-[conic-gradient(from_0deg,rgba(220,38,38,0.10),transparent_40%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20 md:pt-36 md:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white"
        >
          A home for contemporary theatre in Nepal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-lg md:text-xl text-slate-300 max-w-2xl"
        >
          Creating bold productions, nurturing artists, and bringing powerful stories to life in Kathmandu and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#live" className="px-5 py-3 rounded-lg bg-amber-400 text-slate-900 font-medium hover:bg-amber-300 transition">See live shows</a>
          <a href="#upcoming" className="px-5 py-3 rounded-lg bg-slate-800/60 text-white border border-white/10 hover:bg-slate-800 transition">Upcoming events</a>
        </motion.div>
      </div>
    </section>
  )
}
