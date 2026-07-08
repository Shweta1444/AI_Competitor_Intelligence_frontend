import { motion } from "framer-motion";
import { FaRobot, FaGithub } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";



export default function Navbar() 
{
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="logo">
        <FaRobot />
        <span>CompetitorAI</span>
      </div>

      <div className="nav-links">
        <a href="#dashboard">Dashboard</a>
        <a href="#features">Features</a>
        <a href="#reports">Reports</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-actions">
        <div className="ai-badge">
          <HiSparkles />
          AI Powered
        </div>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          <FaGithub />
        </a>
      </div>
    </motion.nav>
  );
}