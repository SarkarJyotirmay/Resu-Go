import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
// import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resu-Go" },
    { name: "description", content: "Smart AI Resume analyzer." },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);
      const resumes = (await kv.list("resume:*", true)) as KVItem[];
      const parsed = resumes.map((res) => JSON.parse(res.value) as Resume);
      setResumes(parsed || []);
      setLoadingResumes(false);
    };

    loadResumes();
  }, []);

  useEffect(() => {
    console.log("Resumes updated: ", resumes);
  }, [resumes]);

  

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1 className="line-clamp-2">
            Track ypour applications and resume here.
          </h1>
          <h2 className="line-clamp-2">
            Review your submissions and check AI-powered feedback.
          </h2>
        </div>
      </section>

      {/* RESUME CARDS  */}
      {!loadingResumes && resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((res) => (
            <ResumeCard key={res.id} resume={res} />
          ))}
        </div>
      )}

      {loadingResumes && (
        <div className="flex justify-center items-center">
          <img src="/images/resume-scan-2.gif" alt="Loading" className="w-[200px]"  />
        </div>
      )}

      {
        !loadingResumes && resumes.length === 0 && (
          <div className="flex flex-col items-center gap-4 mt-10">
            <h2 className="text-gray-500">No resumes found. Start by uploading one!</h2>
            <Link to="/upload" className="btn btn-primary">
              Upload Resume
            </Link>
          </div>
        )
      }
    </main>
  );
}
