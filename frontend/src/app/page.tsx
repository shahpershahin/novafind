'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';
import ResultCard from '../components/ResultCard';
import Stepper from '../components/Stepper';

export default function Home() {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const steps = [
    'Submit Idea',
    'Refine Idea',
    'Generate Keywords',
    'Find Papers',
    'Find Patents',
    'Summarize',
    'Done',
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);
    setStep(1);

    try {
      // Simulate step progress for UI effect
      for (let i = 2; i < steps.length - 1; i++) {
        setStep(i);
        await new Promise((r) => setTimeout(r, 300));
      }

      const res = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea }),
      });

      if (!res.ok) {
        throw new Error('Backend error');
      }

      setStep(steps.length - 1);
      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError('Failed to analyze idea. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mt-8"
      >
        <div className="flex flex-col items-center mb-6">
          <motion.img
            src="/logo.svg"
            alt="NovaFind Logo"
            className="h-16 mb-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          />
          <motion.h1
            className="text-4xl font-extrabold text-white text-center mb-2 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              NovaFind
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-white/80 text-center mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your AI-powered Research & Patent Assistant for Novelty Discovery
          </motion.p>
        </div>
        <Stepper steps={steps} currentStep={step} />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <motion.textarea
            className="rounded-xl p-4 text-lg bg-white/80 focus:bg-white focus:ring-2 focus:ring-fuchsia-400 transition min-h-[100px] resize-none"
            placeholder="Describe your research idea..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            required
            disabled={loading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: loading ? 1 : 1.05 }}
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              <>Analyze Idea</>
            )}
          </motion.button>
        </form>
        <ProgressBar progress={loading ? (step / (steps.length - 1)) * 100 : 100} />
        <AnimatePresence>
          {error && (
            <motion.div
              className="mt-4 text-red-500 text-center font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {result && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <ResultCard result={result} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <footer className="mt-8 text-white/60 text-sm">
        &copy; {new Date().getFullYear()} NovaFind. Crafted with <span className="text-fuchsia-400">♥</span>
      </footer>
    </main>
  );
}
