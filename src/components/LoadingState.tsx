import { motion } from "framer-motion";
import {
  FaGlobe,
  FaSearch,
  FaRobot,
  FaChartBar,
  FaPaperPlane,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaGlobe />,
    title: "Scraping Company Website",
  },
  {
    icon: <FaSearch />,
    title: "Finding Competitor Information",
  },
  {
    icon: <FaRobot />,
    title: "Running AI Analysis",
  },
  {
    icon: <FaChartBar />,
    title: "Generating Intelligence Report",
  },
  {
    icon: <FaPaperPlane />,
    title: "Preparing Email Delivery",
  },
];

export default function LoadingState() {
  return (
    <motion.div
      className="loading-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h2
        animate={{
          opacity: [1, .6, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        🤖 AI Agent Working...
      </motion.h2>

      <p className="loading-subtitle">
        Please wait while we analyze your competitors.
      </p>

      <div className="progress-wrapper">
        <motion.div
          className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 6,
          }}
        />
      </div>

      <div className="loading-steps">
        {steps.map((step, index) => (
          <motion.div
            className="loading-step"
            key={index}
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * .45,
            }}
          >
            <div className="step-icon">
              {step.icon}
            </div>

            <span>{step.title}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="loading-note"
        animate={{
          opacity: [.4, 1, .4],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        ⏳ Estimated time: 10–20 seconds
      </motion.div>
    </motion.div>
  );
}