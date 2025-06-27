// src/app/dashboard/page.tsx
import ProjectCard from '../../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Exploring the Use of AI in Personalized Education',
    status: 'Completed',
    date: '2023-08-15',
  },
  {
    id: 2,
    title: 'Developing a Novel Approach to Renewable Energy Storage',
    status: 'In Progress',
    date: '2023-09-22',
  },
  {
    id: 3,
    title: 'Investigating the Impact of Social Media on Mental Health',
    status: 'Completed',
    date: '2023-10-10',
  },
]

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Projects</h1>
      <div className="grid gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
