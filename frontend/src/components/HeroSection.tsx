import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[400px] py-16 bg-gradient-to-b from-gray-100 to-blue-100 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
      <img src="/hero-illustration.png" alt="Hero Illustration" className="absolute bottom-0 right-0 w-2/3 max-w-xl opacity-60 z-0 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          Validate Your Research Ideas with <span className="text-blue-400">ScholarMint</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
          ScholarMint empowers students and innovators by automating the idea validation process for research and patent drafting.
        </p>
        <Link href="/signup">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition">
            Get Started Now
          </button>
        </Link>
      </div>
    </section>
  );
} 