import { MapPin, Mail, Phone, Globe, Linkedin } from 'lucide-react'

export default function ProfileHeader() {
  const avatarUrl = 'https://api.dicebear.com/7.x/initials/svg?seed=Stacy%20Lee&backgroundType=gradientLinear&fontFamily=Helvetica&fontWeight=700'

  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-500" />
      <div className="p-6 -mt-12">
        <div className="flex items-end gap-4">
          <img
            src={avatarUrl}
            alt="Stacy Lee"
            className="w-24 h-24 rounded-full ring-4 ring-white shadow-md bg-white"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-slate-900">Stacy Lee</h1>
            <p className="text-slate-700">Software Engineer • MIT Alum • Building scalable, user‑centric products</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mt-2">
              <span className="inline-flex items-center gap-1"><MapPin size={16} /> San Francisco Bay Area</span>
              <span>•</span>
              <a href="mailto:stacy.lee@example.com" className="inline-flex items-center gap-1 hover:text-blue-600"><Mail size={16} /> stacy.lee@example.com</a>
              <span className="hidden sm:inline">•</span>
              <a href="tel:+14155551234" className="inline-flex items-center gap-1 hover:text-blue-600"><Phone size={16} /> +1 (415) 555‑1234</a>
            </div>
            <div className="flex gap-3 mt-3">
              <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">Open to work</a>
              <a href="#" className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 px-4 py-2 rounded-md transition-colors"><Linkedin size={18}/> Connect</a>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <a href="https://stacylee.dev" target="_blank" className="group flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-colors">
            <Globe size={18} className="text-blue-600" />
            <div>
              <p className="font-medium text-slate-900 group-hover:text-blue-700">stacylee.dev</p>
              <p className="text-slate-500">Personal site</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/stacylee" target="_blank" className="group flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-colors">
            <Linkedin size={18} className="text-blue-600" />
            <div>
              <p className="font-medium text-slate-900 group-hover:text-blue-700">linkedin.com/in/stacylee</p>
              <p className="text-slate-500">LinkedIn</p>
            </div>
          </a>
          <a href="mailto:stacy.lee@example.com" className="group flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-colors">
            <Mail size={18} className="text-blue-600" />
            <div>
              <p className="font-medium text-slate-900 group-hover:text-blue-700">Email Stacy</p>
              <p className="text-slate-500">Quick contact</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
