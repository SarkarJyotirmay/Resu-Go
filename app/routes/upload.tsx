import React, { useEffect, useState, type FormEvent } from "react";
import FileUploader from "~/components/FileUploader";
import Navbar from "~/components/Navbar";

const upload = () => {
  const [isProcessing, setIsprocessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState <File | null> (null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const form = e.currentTarget.closest('form')
    if(!form) return
    const formData = new FormData(form)
    const companyName = formData.get('company-name')
    const jobTitle = formData.get('job-title')
    const jobDescription = formData.get('job-description')
  }

  const handleFileChange = (file: File | null)=>{
    setFile(file)
  }

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover flex flex-col items-center">
      <Navbar />
      <div className="mian-section p-10">
        <div className="page-heading text-center">
          <h1 className="line-clamp-2">Smart feedback from your dream job</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src="/images/resume-scan.gif" alt="resume-scan" className="w-full" />
            </>
          ) : (
            <>
            <h2 className="line-clamp-2">Drop your resume for ATS and improvement tips</h2>
            </>
          )}

          {
            !isProcessing && 
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
                <div className="form-div">
                    <label htmlFor="company-name">Company Name</label>
                    <input type="text" name="company-name" id="company-name" placeholder="Company name" />
                </div>
                <div className="form-div">
                    <label htmlFor="job-title">Job title</label>
                    <input type="text" name="job-title" id="job-title" placeholder="Job title" />
                </div>
                <div className="form-div">
                    <label htmlFor="job-description">Job description</label>
                    <textarea rows={5} name="job-description" id="job-description" placeholder="Job description" />
                </div>
                <div className="form-div">
                    <label htmlFor="uploader">Upload Resume</label>
                    <FileUploader file={file} onFileSelect={handleFileChange} />
                    
                </div>

                <button className="primary-button" type="submit">Analyze resume</button>
            </form>
          }
        </div>
      </div>
    </main>
  );
};

export default upload;
