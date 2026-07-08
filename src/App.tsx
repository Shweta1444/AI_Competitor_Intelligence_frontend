import { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoadingState from "./components/LoadingState";
import ReportViewer from "./components/ReportViewer";
import Footer from "./components/Footer";
import FeatureCards from "./components/FeatureCards";
import About from "./components/About";

import "./App.css";


function App() {

  const [companyUrl, setCompanyUrl] = useState("");
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [email, setEmail] = useState("");
  const [schedule, setSchedule] = useState("weekly");


  const [loading, setLoading] = useState(false);

  const [report, setReport] = useState("");

  const [emailSent, setEmailSent] = useState(false);

  const [error, setError] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const [processMessage, setProcessMessage] = useState("");


  const reportSectionRef = useRef<HTMLDivElement>(null);
const loadingSectionRef = useRef<HTMLDivElement>(null);


  const generateReport = async () => {

    setLoading(true);
    setTimeout(() => {

    loadingSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  }, 100);



    setError("");

    setReport("");

    setEmailSent(false);


    try {


      setProcessMessage(
        "🔍 Checking company and competitor details..."
      );


      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );



      if (!companyUrl.trim() || !competitorUrl.trim()) {

        throw new Error(
          "Please enter both company URL and competitor URL"
        );

      }



      setProcessMessage(
        "🌐 Analyzing websites..."
      );


      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );



      setProcessMessage(
        "🤖 AI is generating competitor insights..."
      );



      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/analyze`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            companyUrl,
            competitorUrl,
            email,
            schedule,
          }),
        }
      );



      const data = await response.json();



      if (!response.ok) {

        throw new Error(
          data.error || "Request failed"
        );

      }



      setProcessMessage(
        "📊 Preparing your intelligence report..."
      );



      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );



      setReport(data.report);



      if (data.emailSent) {

        setEmailSent(true);

      }



      setShowPopup(true);


    } catch (err) {


      console.error(err);



      setError(

        err instanceof Error

          ? err.message

          : "Something went wrong"

      );



    } finally {


      setLoading(false);

      setProcessMessage("");

    }

  };







  // Auto close popup

  useEffect(() => {


    if (showPopup) {


      const timer = setTimeout(() => {


        setShowPopup(false);


      }, 5000);



      return () => clearTimeout(timer);


    }


  }, [showPopup]);







  return (

    <>


      <Navbar />



      <Hero

        companyUrl={companyUrl}

        competitorUrl={competitorUrl}

        email={email}

        schedule={schedule}

        setCompanyUrl={setCompanyUrl}

        setCompetitorUrl={setCompetitorUrl}

        setEmail={setEmail}

        setSchedule={setSchedule}

        generateReport={generateReport}

      />



      <FeatureCards />



      <About />




{loading && (

  <div ref={loadingSectionRef}>

    <LoadingState

      message={processMessage}

    />

  </div>

  )}






      {/* SUCCESS POPUP */}

      {showPopup && (

        <div className="report-popup">


          <div className="popup-box">


            <button

              className="close-popup"

              onClick={() => setShowPopup(false)}

            >

              ✕

            </button>




            <div className="popup-icon">

              🎉

            </div>




            <h2>

              Report Ready!

            </h2>




            <p>

              Your AI Competitor Intelligence Report

              has been generated successfully.

            </p>




            {emailSent && (

              <p className="email-text">


                📧 Email sent to:

                <br />

                <b>{email}</b>


              </p>

            )}






            <button

              onClick={() => setShowPopup(false)}

            >

              View Report


            </button>



          </div>


        </div>

      )}








      {error && (

        <div className="status error">

          {error}

        </div>

      )}








      {!loading && report && (

        <div ref={reportSectionRef}>


          <ReportViewer

            report={report}

          />


        </div>

      )}







      <Footer />


    </>

  );

}


export default App;