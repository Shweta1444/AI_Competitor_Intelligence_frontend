import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoadingState from "./components/LoadingState";
import ReportViewer from "./components/ReportViewer";
import Footer from "./components/Footer";
import FeatureCards from "./components/FeatureCards";
import About from "./components/About";

import "./App.css";


function App() {

  const [companyUrl,setCompanyUrl] = useState("");
  const [competitorUrl,setCompetitorUrl] = useState("");
  const [email,setEmail] = useState("");
  const [schedule,setSchedule] = useState("weekly");


  const [loading,setLoading] = useState(false);

  const [report,setReport] = useState("");

  const [emailSent,setEmailSent] = useState(false);


  const [error,setError] = useState("");

  const [showPopup,setShowPopup] = useState(false);


const generateReport = async () => {

  setLoading(true);

  setError("");

  setReport("");

  setEmailSent(false);


  try {

    const response = await fetch(
      "http://localhost:3000/analyze",
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


    setReport(data.report);


    if (data.emailSent) {

      setEmailSent(true);

    }


    // Show popup after report generation

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

  }

};





  // Auto close popup

  useEffect(()=>{


    if(showPopup){


      const timer=setTimeout(()=>{

        setShowPopup(false);

      },5000);



      return ()=>clearTimeout(timer);

    }


  },[showPopup]);

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



{loading && <LoadingState />}




{/* SUCCESS POPUP */}

{showPopup && (

<div className="report-popup">


<div className="popup-box">


<button

className="close-popup"

onClick={()=>setShowPopup(false)}

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



{

emailSent &&

<p className="email-text">

📧 Email sent to:

<br/>

<b>{email}</b>

</p>

}



<button

onClick={()=>setShowPopup(false)}

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

<ReportViewer

report={report}

/>

)}






<Footer />


</>

);


}


export default App;