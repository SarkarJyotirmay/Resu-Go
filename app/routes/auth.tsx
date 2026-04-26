import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "ResuGo | Auth" },
  {
    name: "description",
    content: "Login to your account",
  },
];

const auth = () => {
  let { isLoading, auth } = usePuterStore();
  const location = useLocation()
  const nextLocation = location.search.split("next=")[1]
  const navigate = useNavigate();
  useEffect(()=>{
    if(auth.isAuthenticated ) navigate(nextLocation) 
  },[auth.isAuthenticated, nextLocation])


  return (
    <>
      <main className="bg-[url('/images/bg-main.svg')] bg-cover flex items-center justify-center">
        <div className="gradient-border shsdow-lg">
          <section className="flex flex-col gap-8 bg-white p-10 rounded-2xl">
            <div className="flex flex-col items-center gap-2 text-center">
              <h1>WELCOME</h1>
              <h2>Log In to continue your job journey</h2>
            </div>

            <div>
              {isLoading ? (
                <button className="auth-button animate-pulse">
                  Signing you in ....
                </button>
              ) : (
                <>
                  {auth.isAuthenticated ? (
                    <button className="auth-button" onClick={auth.signOut}>
                      <p>Log out</p>
                    </button>
                  ) : (
                    <button className="auth-button" onClick={auth.signIn}>
                      <p>Log in</p>
                    </button>
                  )}
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default auth;
