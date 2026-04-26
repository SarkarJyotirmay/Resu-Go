import React, { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import FileUploader from "~/components/FileUploader";
import Navbar from "~/components/Navbar";
import { convertPdfToImage } from "~/lib/pdfToImage";
import { usePuterStore } from "~/lib/puter";
import { generateUUID } from "~/lib/utils";
import { prepareInstructions, AIResponseFormat } from "../../constants";

const upload = () => {
  const [isProcessing, setIsprocessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { fs, auth, ai, kv, isLoading } = usePuterStore();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    if (!form) return;
    const formData = new FormData(form);
    const companyName = (formData.get("company-name") as string) || null;
    const jobTitle = (formData.get("job-title") as string) || null;
    const jobDescription = (formData.get("job-description") as string) || null;

    if (!file) return;

    handleAnalyze({ companyName, jobTitle, jobDescription, file });
  };

  async function handleAnalyze({
    companyName,
    jobTitle,
    jobDescription,
    file,
  }: ResumeObjectToAnalyze) {
    if (!file) return;
    try {
    setIsprocessing(true);
    setStatusText("Uploading file ...");
    const uploadedFile = await fs.upload([file]);
    if (!uploadedFile) return setStatusText("Error: Failed to upload file!");
    setStatusText("Converting to image ...");
    const imageFile = await convertPdfToImage(file);
    if (!imageFile.file)
      return setStatusText("Error: failed to convert Image form PDF");
    setStatusText("Uploading the image ...");
    const uploadedImage = await fs.upload([imageFile?.file]);
    if (!uploadedImage)
      return setStatusText("Error: Failed to Upload the image ...");
    setStatusText("Preparing data ...");
    const UUID = generateUUID();
    const data = {
      id: UUID,
      resumePath: uploadedFile.path,
      imagePath: uploadedImage.path,
      companyName,
      jobTitle,
      jobDescription,
      feedback: "",
    };
    await kv.set(`resume:${UUID}`, JSON.stringify(data));
    setStatusText("Analyzing ...");
    if (!jobTitle || !jobDescription) return;
    const feedback = await ai.feedback(
      uploadedFile.path,
      prepareInstructions({ jobTitle, jobDescription, AIResponseFormat }),
    );
    if (!feedback) return setStatusText("Error: Failed to analyze resume");
    
    const feedbacktext =
    typeof feedback.message.content === "string"
    ? feedback.message.content
    : feedback.message.content[0].text;
    
    data.feedback = JSON.parse(feedbacktext);
    await kv.set(`resume:${UUID}`, JSON.stringify(data));
    setStatusText("Analysis completed. Redirecting ...")
    console.log('====================================');
    console.log("data", data);
    console.log('====================================');
    } catch (error) {
      console.error("Error in process", error)
    }
  }

  const handleFileChange = (file: File | null) => {
    setFile(file);
  };

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover flex flex-col items-center">
      <Navbar />
      <div className="mian-section p-10">
        <div className="page-heading text-center">
          <h1 className="line-clamp-2">Smart feedback from your dream job</h1>
          {isProcessing ? (
            <>
              <h2>{statusText} Uploading file ...</h2>
              <img
                src="/images/resume-scan.gif"
                alt="resume-scan"
                className="w-full"
              />
            </>
          ) : (
            <>
              <h2 className="line-clamp-2">
                Drop your resume for ATS and improvement tips
              </h2>
            </>
          )}

          {!isProcessing && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="form-div">
                <label htmlFor="company-name">Company Name</label>
                <input
                  type="text"
                  name="company-name"
                  id="company-name"
                  placeholder="Company name"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-title">Job title</label>
                <input
                  type="text"
                  name="job-title"
                  id="job-title"
                  placeholder="Job title"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-description">Job description</label>
                <textarea
                  rows={5}
                  name="job-description"
                  id="job-description"
                  placeholder="Job description"
                />
              </div>
              <div className="form-div">
                <label htmlFor="uploader">Upload Resume</label>
                <FileUploader file={file} onFileSelect={handleFileChange} />
              </div>

              <button className="primary-button" type="submit">
                Analyze resume
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export default upload;
