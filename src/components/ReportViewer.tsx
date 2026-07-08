import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  FaChartLine,
  FaFilePdf,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

interface ReportViewerProps {
  report: string;
}

export default function ReportViewer({
  report,
}: ReportViewerProps) {

  const reportRef = useRef<HTMLDivElement>(null);


  const downloadPdf = () => {

    const element = reportRef.current;

    if (!element) return;


    html2pdf()
      .set({
        margin: 10,

        filename: "AI_Competitor_Intelligence_Report.pdf",

        image: {
          type: "jpeg",
          quality: 0.98,
        },

        html2canvas: {
          scale: 2,
          useCORS: true,
        },

        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      })
      .from(element)
      .save();

  };


  if (!report) return null;


  return (
    <motion.section
      className="report-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* EVERYTHING INSIDE THIS DIV WILL GO INTO PDF */}
      <div ref={reportRef}>


        <motion.div
          className="success-banner"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >

          <FaCheckCircle />

          <div>
            <h3>
              Report Generated Successfully
            </h3>

            <p>
              Your AI report is ready.
            </p>
          </div>

        </motion.div>



        <div className="report-header">

          <div>

            <h1>
              <FaChartLine />
              Competitor Intelligence Report
            </h1>


            <p>
              AI Generated Strategic Analysis
            </p>

          </div>

        </div>




        <div className="report-content">

          <article className="prose prose-invert max-w-none">

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
            >
              {report}
            </ReactMarkdown>

          </article>

        </div>


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