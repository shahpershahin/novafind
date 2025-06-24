import { motion } from 'framer-motion';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => (
  <div className="flex items-center justify-center gap-2 mb-2">
    {steps.map((step, idx) => (
      <div key={step} className="flex items-center">
        <motion.div
          className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold
            ${idx <= currentStep
              ? 'bg-fuchsia-500 text-white shadow-lg'
              : 'bg-white/30 text-white/60'
            }`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: idx * 0.05 }}
        >
          {idx + 1}
        </motion.div>
        {idx < steps.length - 1 && (
          <motion.div
            className="w-8 h-1 bg-white/30 mx-1 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: idx * 0.05 }}
          />
        )}
      </div>
    ))}
  </div>
);

export default Stepper;
