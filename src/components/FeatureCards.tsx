import { motion } from "framer-motion";
import {
  FaRobot,
  FaChartLine,
  FaFilePdf,
  FaEnvelope,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Analysis",
    desc: "LLM-powered competitor insights.",
  },
  {
    icon: <FaChartLine />,
    title: "Pricing Tracking",
    desc: "Monitor competitor pricing automatically.",
  },
  {
    icon: <FaFilePdf />,
    title: "PDF Reports",
    desc: "Download beautifully formatted reports.",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Delivery",
    desc: "Reports delivered directly to your inbox.",
  },
  {
    icon: <FaClock />,
    title: "Scheduled Reports",
    desc: "Daily, weekly and monthly automation.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Market Intelligence",
    desc: "Stay ahead of competitors.",
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="features-section">
      <h2>Why Choose CompetitorAI?</h2>

      <div className="features-grid">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="feature-card"
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
          >
            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}