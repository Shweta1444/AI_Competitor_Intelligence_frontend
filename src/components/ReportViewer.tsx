import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  FaChartLine,
  FaFilePdf,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

interface ReportViewerProps {
  report: string;
  downloadPdf: () => void;
}

export default function ReportViewer({
  report,
  downloadPdf,
}: ReportViewerProps) {
  if (!report) return null;

  return (
    <motion.section
      className="report-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="success-banner"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
      >
        <FaCheckCircle />

        <div>
          <h3>Report Generated Successfully</h3>
          <p>Your AI report is ready.</p>
        </div>
      </motion.div>

      <div className="report-header">
        <div>
          <h1>
            <FaChartLine />
            Competitor Intelligence Report
          </h1>

          <p>AI Generated Strategic Analysis</p>
        </div>
      </div>

      <div className="report-content">
        <article className="prose prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {report}
          </ReactMarkdown>
        </article>
      </div>

      <div className="report-actions">
        <button
          className="secondary-btn"
          onClick={downloadPdf}
        >
          <FaFilePdf />
          Download PDF
        </button>

        <button className="primary-btn">
          <FaEnvelope />
          Email Report
        </button>
      </div>
    </motion.section>
    
  );
}