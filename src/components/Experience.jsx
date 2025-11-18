import { Briefcase } from 'lucide-react'

const roles = [
  {
    company: 'Stripe',
    title: 'Senior Software Engineer',
    period: '2022 — Present',
    points: [
      'Lead engineer on payment risk tooling; reduced manual review time by 37%',
      'Designed and shipped event-driven architecture processing 50k+ events/min',
      'Mentored 4 engineers; created onboarding docs used org-wide',
    ],
  },
  {
    company: 'Airbnb',
    title: 'Software Engineer',
    period: '2019 — 2022',
    points: [
      'Built host pricing insights; improved booking conversion by 2.3%',
      'Migrated legacy services to GraphQL; cut API latency by 45%',
      'Drove accessibility initiative achieving WCAG 2.1 AA for core flows',
    ],
  },
  {
    company: 'MIT CSAIL',
    title: 'Research Assistant',
    period: '2017 — 2019',
    points: [
      'Co-authored paper on collaborative coding agents accepted at CHI',
      'Prototyped real‑time code review assistance using program analysis',
    ],
  },
]

export default function Experience() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="text-blue-600" size={18} />
        <h2 className="text-lg font-semibold text-slate-900">Experience</h2>
      </div>

      <div className="space-y-6">
        {roles.map((r, i) => (
          <div key={i} className="">
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="text-slate-900 font-medium">{r.title}</h3>
              <span className="text-slate-500">•</span>
              <p className="text-slate-700">{r.company}</p>
              <span className="ml-auto text-sm text-slate-500">{r.period}</span>
            </div>
            <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
              {r.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
