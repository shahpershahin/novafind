import { motion } from 'framer-motion';
import React from 'react';
interface ResultCardProps {
  result: any;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => (
  <motion.div
    className="bg-white/90 rounded-xl p-6 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
  >
    <h2 className="text-xl font-bold mb-2 text-fuchsia-700">Refined Idea</h2>
    <p className="mb-4">{result.refinedIdea}</p>
    <h2 className="text-xl font-bold mb-2 text-fuchsia-700">Keywords</h2>
    <div className="mb-4 flex flex-wrap gap-2">
      {result.keywords?.map((kw: string) => (
        <span key={kw} className="bg-fuchsia-100 text-fuchsia-700 px-3 py-1 rounded-full text-sm font-medium">
          {kw}
        </span>
      ))}
    </div>
    <h2 className="text-xl font-bold mb-2 text-fuchsia-700">Top Research Papers</h2>
    <ul className="mb-4 space-y-2">
      {result.papers?.length === 0 && <li className="text-gray-500">No papers found.</li>}
      {result.papers?.map((p: any, i: number) => (
        <li key={i} className="bg-white rounded-lg p-3 shadow">
          <div className="font-semibold">{p.title}</div>
          <div className="text-xs text-gray-500 mb-1">
            {p.authors?.join(', ')}
          </div>
          <div className="text-sm mb-1">{p.abstract}</div>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline text-xs">
            View Paper
          </a>
        </li>
      ))}
    </ul>
    <h2 className="text-xl font-bold mb-2 text-fuchsia-700">Top Patents</h2>
    <ul className="mb-4 space-y-2">
      {result.patents?.length === 0 && <li className="text-gray-500">No patents found.</li>}
      {result.patents?.map((pat: any, i: number) => (
        <li key={i} className="bg-white rounded-lg p-3 shadow">
          <div className="font-semibold">{pat.title}</div>
          <div className="text-sm mb-1">{pat.abstract}</div>
          <a href={pat.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline text-xs">
            View Patent
          </a>
        </li>
      ))}
    </ul>
    <h2 className="text-xl font-bold mb-2 text-fuchsia-700">Summary</h2>
    <p>{result.summary}</p>
    <div className="mt-6">
      <a
        href={`data:text/markdown;charset=utf-8,${encodeURIComponent(result.report)}`}
        download="novafind_report.md"
        className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
      >
        Download Report (Markdown)
      </a>
    </div>
  </motion.div>
);

export default ResultCard;
