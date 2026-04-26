import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resu-Go" },
    { name: "description", content: "Smart AI Resume analyzer." },
  ];
}

export default function Home() {
  const {auth} = usePuterStore()
  const navigate = useNavigate();
  useEffect(()=>{
    if(!auth.isAuthenticated ) navigate("/auth?next=/") 
  },[auth.isAuthenticated])

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1 className="line-clamp-2">Track ypour applications and resume here.</h1>
          <h2 className="line-clamp-2">Review your submissions and check AI-powered feedback.</h2>
        </div>
      </section>

      {/* RESUME CARDS  */}
      { resumes.length && (
          <div className="resumes-section">
            {
              resumes.map((res)=>(
                <ResumeCard key={res.id} resume={res}/>
              ))
            }
        </div>
      )
      }
    </main>
  );
}
