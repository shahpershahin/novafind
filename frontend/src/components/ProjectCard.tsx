// src/components/ProjectCard.tsx
import Link from 'next/link'

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={`/project/${project.id}`}>
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <div className="flex items-center gap-4 text-gray-600">
          <span className={`px-2 py-1 rounded text-xs ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
            {project.status}
          </span>
          <span>{project.date}</span>
        </div>
      </div>
    </Link>
  )
}
