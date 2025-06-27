// src/app/report/[id]/page.tsx
import ReportTable from '../../../components/ReportTable'
import DownloadButton from '../../../components/DownloadButton'

const papers = [
  { title: "Paper Title 1", authors: "Author A, Author B", year: 2022, relevance: "High" },
  { title: "Paper Title 2", authors: "Author C", year: 2021, relevance: "Medium" },
  { title: "Paper Title 3", authors: "Author D, Author E, Author F", year: 2020, relevance: "Low" },
]

const patents = [
  { title: "Patent Title 1", assignee: "Assignee X", year: 2023, relevance: "High" },
  { title: "Patent Title 2", assignee: "Assignee Y", year: 2022, relevance: "Medium" },
  { title: "Patent Title 3", assignee: "Assignee Z", year: 2021, relevance: "Low" },
]

export default function ReportPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Project Title</h1>
      <div className="text-gray-500 mb-6">Created on July 20, 2024</div>
      <section className="mb-8">
        <h2 className="font-semibold mb-2">Summary</h2>
        <p>
          This section summarizes relevant papers and patents, assesses the novelty of the idea, and highlights overlaps. It aims to provide a comprehensive overview of the existing landscape and identify potential areas for innovation.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold mb-2">Novelty Assessment</h2>
        <p>
          The idea demonstrates a moderate level of novelty based on an analysis of existing literature and patents. While some aspects align with current trends, the specific combination of features and proposed application in a specific field presents a unique contribution.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold mb-2">Relevant Papers</h2>
        <ReportTable
          columns={["Title", "Authors", "Year", "Relevance"]}
          data={papers.map(p => [p.title, p.authors, p.year, p.relevance])}
        />
      </section>
      <section className="mb-8">
        <h2 className="font-semibold mb-2">Relevant Patents</h2>
        <ReportTable
          columns={["Title", "Assignee", "Year", "Relevance"]}
          data={patents.map(p => [p.title, p.assignee, p.year, p.relevance])}
        />
      </section>
      <section className="mb-8">
        <h2 className="font-semibold mb-2">Overlap Analysis</h2>
        <p>
          This section identifies some overlap with existing patents in a related technology area. The proposed innovation focuses on a unique aspect not explicitly covered by existing patents. Further investigation into the specific claims of these patents is recommended to ensure non-infringement.
        </p>
      </section>
      <div className="flex justify-end">
        <DownloadButton />
      </div>
    </div>
  )
}
