import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="text-blue-600" size={18} />
        <h2 className="text-lg font-semibold text-slate-900">Education</h2>
      </div>

      <div className="flex items-start gap-3">
        <img src="https://images.unsplash.com/photo-1658604520420-7569f9685b69?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNSVR8ZW58MHwwfHx8MTc2MzQzNTUyMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="MIT" className="w-10 h-10" />
        <div>
          <p className="font-medium text-slate-900">Massachusetts Institute of Technology</p>
          <p className="text-slate-700">B.S. Computer Science and Engineering</p>
          <p className="text-sm text-slate-500">2015 — 2019</p>
        </div>
      </div>
    </section>
  )
}
