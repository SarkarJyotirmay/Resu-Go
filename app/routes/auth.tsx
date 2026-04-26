import React, { useEffect } from "react";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "ResuGo | Auth" },
  {
    name: "description",
    content: "Login to your account",
  },
];

const auth = () => {
    let {isLoading} = usePuterStore();
    useEffect(()=>{
        console.log("Is Loading", isLoading)
    }, [isLoading])
  return <>
    <main className="bg-[url('/images/bg-main.svg')] bg-cover flex items-center justify-center">
        <div className="gradient-border shsdow-lg">
            <section className="flex flex-col gap-8 bg-white p-10 rounded-2xl">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1>WELCOME</h1>
                    <h2>Log In to continue your job journey</h2>
                </div>
            </section>
        </div>
    </main>
  </>;
};

export default auth;
