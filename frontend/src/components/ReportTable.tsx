// src/components/ReportTable.tsx
export default function ReportTable({ columns, data }: { columns: string[], data: any[][] }) {
  return (
    <table className="min-w-full bg-white rounded shadow">
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i} className="px-4 py-2 text-left font-semibold text-gray-700">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
