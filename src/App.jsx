import ProfileHeader from './components/ProfileHeader'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top nav mimic */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold">in</div>
          <input
            placeholder="Search Stacy Lee"
            className="hidden sm:block flex-1 bg-slate-100 border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <nav className="ml-auto text-sm text-slate-600 hidden md:flex gap-6">
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
          </nav>
        </div>
      </header>

      {/* Layout */}
      <main className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ProfileHeader />
          <div id="experience"><Experience /></div>
          <div id="projects"><Projects /></div>
        </div>
        <div className="space-y-6">
          <About />
          <div id="education"><Education /></div>
          <div id="skills"><Skills /></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Stacy Lee — MIT Alum • Built with love
      </footer>
    </div>
  )
}

export default App
