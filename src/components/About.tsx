import { motion } from "framer-motion";
import {
  FaRobot,
  FaChartLine,
  FaBrain,
  FaFilePdf,
  FaEnvelope,
  FaBolt,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-bg"></div>

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="about-tag">
          🚀 ABOUT OUR PLATFORM
        </span>

        <h2>
          AI Powered <span>Competitor Intelligence</span>
        </h2>

        <p className="about-text">
          CompetitorAI helps businesses monitor competitors,
          compare products, analyze market trends, and generate
          intelligent reports using cutting-edge AI models.
          Everything is automated—from website scraping to PDF
          reports and email delivery.
        </p>

        <div className="about-stats">
          <div>
            <h3>500+</h3>
            <span>Reports Generated</span>
          </div>

          <div>
            <h3>99%</h3>
            <span>AI Accuracy</span>
          </div>

          <div>
            <h3>24/7</h3>
            <span>Monitoring</span>
          </div>

          <div>
            <h3>10x</h3>
            <span>Faster Analysis</span>
          </div>
        </div>

        <div className="about-grid">

          <motion.div
            whileHover={{ y: -10 }}
            className="about-card"
          >
            <FaRobot />
            <h3>AI Analysis</h3>
            <p>
              Advanced LLMs generate professional competitor
              intelligence reports with strategic insights.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="about-card"
          >
            <FaChartLine />
            <h3>Market Tracking</h3>
            <p>
              Compare products, pricing strategies, customer
              focus and business positioning automatically.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="about-card"
          >
            <FaBrain />
            <h3>Smart Insights</h3>
            <p>
              SWOT analysis, opportunities, risks and growth
              recommendations powered by AI.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="about-card"
          >
            <FaFilePdf />
            <h3>Professional Reports</h3>
            <p>
              Download beautiful PDF reports or receive them
              instantly via email.
            </p>
          </motion.div>

        </div>

        <div className="tech-stack">

          <span>React</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>Groq AI</span>
          <span>SQLite</span>
          <span>Framer Motion</span>
          <span>Resend</span>

        </div>

        <div className="mission-box">

          <FaBolt />

          <div>
            <h3>Our Mission</h3>

            <p>
              Empower businesses with AI-driven competitive
              intelligence, helping them make faster and smarter
              strategic decisions.
            </p>
          </div>

        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="about-btn"
        >
          <FaEnvelope />
          Get Started Today
        </motion.button>

      </motion.div>
    </section>
  );
}