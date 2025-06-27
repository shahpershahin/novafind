import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 bg-blue-50 flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Ready to Validate Your Research Idea?</h2>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Join ScholarMint today and take the first step towards turning your innovative ideas into impactful realities.
      </p>
      <Link href="/signup">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition">
          Sign Up for Free
        </button>
      </Link>
    </section>
  );
} 