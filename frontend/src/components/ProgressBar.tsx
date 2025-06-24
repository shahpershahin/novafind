import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0 to 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <div className="w-full h-2 bg-white/30 rounded-full mt-6 overflow-hidden">
    <motion.div
      className="h-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5 }}
    />
  </div>
);

export default ProgressBar;
