import { Code2, Server, Boxes } from 'lucide-react'

const skills = [
  { group: 'Languages', items: ['TypeScript', 'Python', 'Go', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Vite'] },
  { group: 'Backend', items: ['FastAPI', 'Node.js', 'gRPC', 'GraphQL'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform'] },
]

export default function Skills() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Boxes className="text-blue-600" size={18} />
        <h2 className="text-lg font-semibold text-slate-900">Skills</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {skills.map((s) => (
          <div key={s.group} className="">
            <p className="text-slate-900 font-medium mb-1">{s.group}</p>
            <p className="text-slate-700">{s.items.join(' • ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
