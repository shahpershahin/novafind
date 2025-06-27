import { FiSearch, FiCpu, FiFileText } from 'react-icons/fi';

const features = [
  {
    icon: 'search',
    title: 'Idea Validation',
    desc: 'Input your research idea, and ScholarMint will analyze its novelty and potential impact using advanced algorithms.'
  },
  {
    icon: 'cpu',
    title: 'Automated Analysis',
    desc: 'Our system automatically searches extensive databases and analyzes your idea against existing research and patents.'
  },
  {
    icon: 'file',
    title: 'Report Generation',
    desc: 'Receive a comprehensive report assessing your ideas viability, potential for patentability, and market relevance.'
  }
];

function getIcon(icon: string) {
  switch (icon) {
    case 'search':
      return <FiSearch className="text-3xl text-blue-400 mb-2" />;
    case 'cpu':
      return <FiCpu className="text-3xl text-blue-400 mb-2" />;
    case 'file':
      return <FiFileText className="text-3xl text-blue-400 mb-2" />;
    default:
      return null;
  }
}

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">How ScholarMint Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="flex-1 bg-blue-50 rounded-2xl shadow p-8 flex flex-col items-center text-center mx-2">
            {getIcon(f.icon)}
            <h3 className="font-semibold text-blue-700 mb-2 text-xl">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 