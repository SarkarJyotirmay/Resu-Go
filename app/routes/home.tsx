import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resu-Go" },
    { name: "description", content: "Smart AI Resume analyzer." },
  ];
}

export default function Home() {
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
