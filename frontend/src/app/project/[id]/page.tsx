// src/app/project/[id]/page.tsx
import ProgressBar from '../../../components/ProgressBar'

const refinedConcepts = [
  "Automated Idea Validation for Research and Patent Drafting",
  "AI-Powered Idea Validation for Early-Stage Research",
  "Automated Idea Validation for Patent Drafting",
]

const keywords = [
  "Automated Idea Validation",
  "Research Idea Validation",
  "Patent Drafting Idea Validation",
]

export default function ProjectProgressPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Project 1: Validation Progress</h1>
      <ProgressBar percent={25} />
      <p className="mt-2 text-blue-700 font-medium">Validating your idea...</p>
      <section className="mt-8">
        <h2 className="font-semibold mb-2">Refined Concepts</h2>
        <ul className="mb-4">
          {refinedConcepts.map((c, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-green-600">✔</span>
              {c}
            </li>
          ))}
        </ul>
        <h2 className="font-semibold mb-2">Search Keywords</h2>
        <ul>
          {keywords.map((k, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-green-600">✔</span>
              {k}
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-8 bg-blue-50 p-4 rounded">
        <p>
          The AI is currently searching for existing solutions and validating the uniqueness of your idea. This may take a few minutes.
        </p>
      </div>
      <div className="mt-8 flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Next</button>
      </div>
    </div>
  )
}
