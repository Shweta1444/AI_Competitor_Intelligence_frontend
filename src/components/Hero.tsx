import { motion } from "framer-motion";
import {
  FaGlobe,
  FaEnvelope,
  FaRobot,
  FaChartLine,
  FaPaperPlane,
} from "react-icons/fa";

interface HeroProps {
  companyUrl: string;
  competitorUrl: string;
  email: string;
  schedule: string;

  setCompanyUrl: (v: string) => void;
  setCompetitorUrl: (v: string) => void;
  setEmail: (v: string) => void;
  setSchedule: (v: string) => void;

  generateReport: () => void;
}

export default function Hero({
  companyUrl,
  competitorUrl,
  email,
  schedule,
  setCompanyUrl,
  setCompetitorUrl,
  setEmail,
  setSchedule,
  generateReport,
}: HeroProps) {
  return (
    <section id="dashboard" className="hero-section">

      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >

        <motion.div
          initial={{ scale: .8 }}
          animate={{ scale: 1 }}
          transition={{ delay: .2 }}
          className="hero-icon"
        >
          <FaRobot />
        </motion.div>

        <h1>
          AI Competitor Intelligence
        </h1>

        <p>
          Monitor competitors, compare pricing,
          analyze features and receive AI-generated
          reports directly in your inbox.
        </p>

        <div className="stats">

          <div>
            <h2>500+</h2>
            <span>Reports</span>
          </div>

          <div>
            <h2>99%</h2>
            <span>Accuracy</span>
          </div>

          <div>
            <h2>24/7</h2>
            <span>Monitoring</span>
          </div>

        </div>

        <div className="input-group">

          <label>
            <FaGlobe />
            Company Website
          </label>

          <input
            value={companyUrl}
            onChange={(e)=>setCompanyUrl(e.target.value)}
            placeholder="https://yourcompany.com"
          />

        </div>

        <div className="input-group">

          <label>
            <FaChartLine />
            Competitor Website
          </label>

          <input
            value={competitorUrl}
            onChange={(e)=>setCompetitorUrl(e.target.value)}
            placeholder="https://competitor.com"
          />

        </div>

        <div className="input-group">

          <label>
            <FaEnvelope />
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="name@email.com"
          />

        </div>

        <div className="input-group">

          <label>
            Schedule
          </label>

          <div className="schedule-buttons">

            <button
              className={schedule==="daily"?"active":""}
              onClick={()=>setSchedule("daily")}
            >
              Daily
            </button>

            <button
              className={schedule==="weekly"?"active":""}
              onClick={()=>setSchedule("weekly")}
            >
              Weekly
            </button>

            <button
              className={schedule==="monthly"?"active":""}
              onClick={()=>setSchedule("monthly")}
            >
              Monthly
            </button>

          </div>

        </div>

        <motion.button
          whileHover={{ scale:1.03 }}
          whileTap={{ scale:.96 }}
          onClick={generateReport}
          className="generate-btn"
        >
          <FaPaperPlane />
          Generate AI Report
        </motion.button>

        <div className="features">

          <div className="feature">
            ⚡ AI Analysis
          </div>

          <div className="feature">
            📈 Pricing Tracking
          </div>

          <div className="feature">
            📄 PDF Reports
          </div>

          <div className="feature">
            📧 Email Delivery
          </div>

        </div>

      </motion.div>

    </section>
  );
}