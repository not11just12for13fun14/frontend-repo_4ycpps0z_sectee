export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-slate-300">
        <div>
          <div className="text-white font-semibold">Theatre Studio Nepal</div>
          <p className="text-sm mt-2">Kathmandu, Nepal</p>
          <p className="text-sm mt-1">info@theatrestudionepal.org</p>
        </div>
        <div>
          <div className="text-white font-semibold">Visit</div>
          <p className="text-sm mt-2">Follow us on social platforms for updates and behind-the-scenes.</p>
        </div>
        <div>
          <div className="text-white font-semibold">Newsletter</div>
          <form className="mt-2 flex gap-2">
            <input type="email" placeholder="Your email" className="w-full px-3 py-2 rounded bg-slate-800/60 border border-white/10 text-white placeholder:text-slate-400" />
            <button className="px-4 py-2 rounded bg-white text-slate-900 font-medium">Join</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} Theatre Studio Nepal. All rights reserved.</div>
    </footer>
  )
}
