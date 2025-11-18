import { FolderGit2, ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'OpenCheckout',
    desc: 'Open-source checkout UI with payment integrations and risk signals.',
    link: 'https://github.com/stacylee/opencheckout',
  },
  {
    name: 'TraceLens',
    desc: 'Developer tool to visualize distributed traces and find bottlenecks.',
    link: 'https://github.com/stacylee/tracelens',
  },
  {
    name: 'HCI Notes',
    desc: 'A curated set of notes & demos on interaction design and accessibility.',
    link: 'https://stacylee.dev/hci-notes',
  },
]

export default function Projects() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <FolderGit2 className="text-blue-600" size={18} />
        <h2 className="text-lg font-semibold text-slate-900">Projects</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            className="group border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <p className="font-medium text-slate-900 group-hover:text-blue-700">{p.name}</p>
              <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-600" />
            </div>
            <p className="text-slate-700 mt-1">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
