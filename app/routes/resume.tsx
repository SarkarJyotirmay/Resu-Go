import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import ATS from "~/components/ATS";
import Details from "~/components/Details";
import Summary from "~/components/Summary";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "Resume Analysis Results - ResuGo" },
  {
    name: "description",
    content:
      "View your resume analysis results, feedback, and insights to help you improve your resume and increase your chances of landing your dream job.",
  },
  {
    name: "keywords",
    content:
      "resume analysis, resume feedback, resume insights, resume improvement, job application, career advice",
  },
];

const resume = () => {
  const { auth, isLoading, kv, fs } = usePuterStore();
  const [imageUrl, setImageUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [loadig, setLoading] = useState(false); // to be replaced with puterstore globally

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isLoading && !auth.isAuthenticated ) navigate(`/auth?next=/resume/${id}`) 
  },[auth.isAuthenticated])

  useEffect(() => {
    const loadResume = async () => {
      const resume = await kv.get(`resume:${id}`);
      if (!resume) return;
      const data = JSON.parse(resume);

      const resumeBlob = await fs.read(data.resumePath);
      if (!resumeBlob) return;
      const pdfBlob = new Blob([resumeBlob], { type: "application/pdf" });
      const resumeUrl = URL.createObjectURL(pdfBlob);
      setResumeUrl(resumeUrl);

      const imageBlob = await fs.read(data.imagePath);
      if (!imageBlob) return;
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageUrl);

      setFeedback(data.feedback);

      console.log({ resumeUrl, imageUrl, feedback: data.feedback });
    };
    setLoading(true);
    loadResume();
    setLoading(false);
  }, [id]);
  return (
    <>
      <main className="!pt-0">
        <nav className="resume-nav">
          <Link to={"/"} className="back-button">
            <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
            <span className="text-gray-800 text-sm font-semibold">
              Back to home page
            </span>
          </Link>
        </nav>

        {isLoading && <div>Loadin....</div>}

        {!isLoading && (
          <div className="flex flex-row w-full max-lg:flex-col-reverse justify-center max-lg:items-center">
            <section className="feedback-sectoin bg-[url('/images/bg-small.svg')]bg-cover h-[100vh] sticky top-0">
              {imageUrl && resumeUrl && (
                <div className="animatre-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit ">
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    <img
                      src={imageUrl}
                      alt="resume"
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </a>
                </div>
              )}
            </section>

            <section className="feedback-section">
                <h2>Resume review</h2>
                { feedback ? (
                    <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
                       <Summary feedback={feedback}/>
                       <ATS score={feedback.ATS.score || 0} suggestions={feedback.ATS.tips || []} />
                       <Details feedback={feedback}/>
                    </div>
                ) : (
                    <img src="/images/resume-scan-2.gif" alt="resume scan image" className="w-full" />
                ) }
            </section>
          </div>
        )}
      </main>
    </>
  );
};

export default resume;
