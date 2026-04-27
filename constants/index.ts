export const resumes: Resume[] = [
  {
    id: "1",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    imagePath: "/images/resume_01.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 85,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "2",
    companyName: "Microsoft",
    jobTitle: "Cloud Engineer",
    imagePath: "/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 55,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "3",
    companyName: "Apple",
    jobTitle: "iOS Developer",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
  AIResponseFormat,
}: {
  jobTitle: string;
  jobDescription: string;
  AIResponseFormat: string;
}) =>
  `You are an expert in ATS (Applicant Tracking System) and resume analysis.
  Please analyze and rate this resume and suggest how to improve it.
  The rating can be low if the resume is bad.
  Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
  If available, use the job description for the job user is applying to to give more detailed feedback.
  If provided, take the job description into consideration.
  The job title is: ${jobTitle}
  The job description is: ${jobDescription}
  Provide the feedback using the following format: ${AIResponseFormat}
  Return the analysis as a JSON object, without any other text and without the backticks.
  Do not include any other text or comments.`;

export const staticUploadResponse = {
  id: "050033dd-3827-4dc6-a625-259e47b5b4e1",
  resumePath:
    "/active_river_3833/AppData/app-907541aa-7512-568b-af67-9f6b383a53ca/Jyotirmay__Sarkar (7).pdf",
  imagePath:
    "/active_river_3833/AppData/app-907541aa-7512-568b-af67-9f6b383a53ca/Jyotirmay__Sarkar (4).png",
  companyName: "Epiroc",
  jobTitle: "Junior Full Stack Developer",
  jobDescription:
    "About the job\nJob Description – Junior Full Stack Developer\n\nDepartment: Technology & Digital / Global Business Solutions\n\nLocation: Bangalore, India\n\nReports To: Janes Beets, Application Manager, IT\n\nJob Purpose\n\nThe Junior Full Stack Developer contributes to the design, development, and maintenance of internal business applications used across Epiroc. The role supports product teams in building secure, scalable, and user‑friendly digital solutions for sourcing applications and collaborates closely with senior developers to ensure high‑quality delivery.\n\nKey Responsibilities\n\nSoftware Development\n\nDevelop and maintain web applications across the full stack using modern frameworks and tools.\nImplement front‑end features using build tooling such as Vite, Webpack, Angular CLI, or React build pipelines (proficiency in at least one required).\nBuild and maintain ASP.NET / C# back‑end services and REST APIs.\n\nSecurity & Identity\n\nIntegrate secure authentication and authorization using Azure AD / SSO (OAuth2/OIDC, tokens, scopes, consent).\n\nCloud & DevOps\n\nContribute to application and infrastructure automation using Azure and Infrastructure‑as‑Code practices.\n\nAgile Collaboration\n\nParticipate in Jira Sprints, daily standups, sprint planning, and other Agile ceremonies.\nWork proactively, manage time effectively, and keep stakeholders informed.\n\nTeamwork & Learning\n\nCollaborate through pair‑programming and code reviews.\nSeek guidance from Senior Developers and remain open to continuous learning and feedback.\n\nExperience\n\nRequired Qualifications\n\n2–3 years of hands‑on software development in a full‑stack or front‑end focused role.\n\nTechnical Skills\n\nFrontend build tooling: Vite, Webpack, Angular CLI, React (at least one required; familiarity with several is a plus).\nBack‑end: ASP.NET / C#, REST API development.\nAuthentication & Authorization: Azure AD / SSO, OAuth2/OIDC.\nExposure to Azure and Infrastructure‑as‑Code concepts.\nKnowledge of API & EDI Integrations is advantageous\n\nMethodology & Tools\n\nWorking knowledge of Jira, Agile/Scrum ways of working.\n\nSoft Skills\n\nStrong communication and stakeholder‑management skills.\nAbility to work independently with accurate time management.\nCuriosity, willingness to learn, and openness to feedback.\n\nEducation\n\nBachelor’s degree in computer science, Information Technology, Software Engineering, or equivalent practical experience.\n\nIt all starts with people. The world needs metals and minerals for the energy transition and our cities and infrastructure must be developed to serve a growing population. To succeed, we need to speed up the shift towards more sustainable mining and construction industries. We at Epiroc accelerate this transformation, together with customers and business partners in more than 150 countries, by developing and providing innovative and safe equipment, digital solutions, and aftermarket support.\n\nAll new thinkers are welcome. We are looking for those who want to develop, grow, and dare to think new. In Epiroc we attract, develop, and retain diverse talent valuing authenticity and unique perspectives, driving our spirit of innovation. We foster an inclusive culture where diversity isn't just a goal but a part of our values and way of working. This is how we do business for a sustainable future.",
  feedback: {
    overallScore: 45,
    ATS: {
      score: 40,
      tips: [
        {
          type: "improve",
          tip: "Add keywords from job description like 'ASP.NET', 'C#', 'Azure AD', 'OAuth2/OIDC', 'Vite', 'Webpack', 'Angular CLI' to match ATS requirements",
        },
        {
          type: "improve",
          tip: "Include 'Infrastructure-as-Code', 'Jira', 'Agile/Scrum' keywords which are specifically mentioned in the job requirements",
        },
        {
          type: "improve",
          tip: "Replace generic terms with specific technologies mentioned in job posting to improve keyword matching",
        },
        {
          type: "good",
          tip: "Good use of technical acronyms and frameworks that ATS can easily parse",
        },
      ],
    },
    toneAndStyle: {
      score: 60,
      tips: [
        {
          type: "good",
          tip: "Professional and concise language",
          explanation:
            "The resume uses appropriate technical terminology and maintains a professional tone throughout, which is suitable for a developer role.",
        },
        {
          type: "improve",
          tip: "Inconsistent formatting and presentation",
          explanation:
            "The resume has formatting issues like broken links, inconsistent date formats, and mixed presentation styles that detract from professionalism.",
        },
        {
          type: "improve",
          tip: "Lacks industry-specific terminology",
          explanation:
            "Missing key terms like 'enterprise applications', 'business solutions', 'stakeholder management' that would resonate with the corporate environment described in the job posting.",
        },
      ],
    },
    content: {
      score: 35,
      tips: [
        {
          type: "improve",
          tip: "Major technology stack mismatch",
          explanation:
            "Resume focuses heavily on MERN stack (MongoDB, Express, React, Node.js) while the job requires ASP.NET/C# backend, Azure technologies, and different frontend build tools. This is a critical gap.",
        },
        {
          type: "improve",
          tip: "Missing required experience areas",
          explanation:
            "No mention of Azure AD/SSO, OAuth2/OIDC, Infrastructure-as-Code, or enterprise-level application development which are core requirements for this position.",
        },
        {
          type: "improve",
          tip: "Insufficient professional experience",
          explanation:
            "Only shows training program experience (Geekster) and very recent employment (Dec 25-Present), lacking the 2-3 years of hands-on development experience required.",
        },
        {
          type: "good",
          tip: "Strong project portfolio",
          explanation:
            "Demonstrates practical application of full-stack development with quantified achievements and live project links, showing hands-on coding ability.",
        },
      ],
    },
    structure: {
      score: 55,
      tips: [
        {
          type: "good",
          tip: "Logical section organization",
          explanation:
            "Resume follows a clear structure with Summary, Experience, Projects, Skills, and Education sections in appropriate order for a developer role.",
        },
        {
          type: "improve",
          tip: "Broken links and formatting issues",
          explanation:
            "The EatZy project link appears broken/malformed, and there are inconsistencies in date formatting and section spacing that hurt readability.",
        },
        {
          type: "improve",
          tip: "Poor experience section structure",
          explanation:
            "The experience section mixes training programs with actual employment, making it unclear what constitutes real work experience versus educational programs.",
        },
        {
          type: "improve",
          tip: "Skills section needs better categorization",
          explanation:
            "Skills are listed but not aligned with job requirements. Should reorganize to highlight relevant technologies first and group by frontend/backend/cloud/tools.",
        },
      ],
    },
    skills: {
      score: 40,
      tips: [
        {
          type: "improve",
          tip: "Critical backend technology gap",
          explanation:
            "Resume shows Node.js/Express.js experience but job requires ASP.NET/C# backend development. This is a fundamental mismatch for the role requirements.",
        },
        {
          type: "improve",
          tip: "Missing cloud and DevOps skills",
          explanation:
            "No mention of Azure, Infrastructure-as-Code, or DevOps practices which are essential for this role. Current skills focus on different cloud platforms (Vercel, Render).",
        },
        {
          type: "improve",
          tip: "Lack of enterprise authentication experience",
          explanation:
            "Shows basic JWT authentication but missing Azure AD, SSO, OAuth2/OIDC experience which are specifically required for enterprise applications.",
        },
        {
          type: "good",
          tip: "Strong frontend development foundation",
          explanation:
            "Solid React.js, responsive design, and state management skills provide a good foundation, though specific build tools like Vite/Webpack need to be highlighted.",
        },
      ],
    },
  },
};

export const resumePageStaticdata = {
    "resumeUrl": "blob:http://localhost:5173/b72549a6-1db7-48ed-895d-0f6ab7a0f3fc",
    "imageUrl": "blob:http://localhost:5173/818713d1-d3cc-4138-a27d-512c68e781a6",
    "feedback": {
        "overallScore": 45,
        "ATS": {
            "score": 40,
            "tips": [
                {
                    "type": "improve",
                    "tip": "Add keywords from job description like 'ASP.NET', 'C#', 'Azure AD', 'OAuth2/OIDC', 'Vite', 'Webpack', 'Angular CLI' to match ATS requirements"
                },
                {
                    "type": "improve",
                    "tip": "Include 'Infrastructure-as-Code', 'Jira', 'Agile/Scrum' keywords which are specifically mentioned in the job requirements"
                },
                {
                    "type": "improve",
                    "tip": "Replace generic terms with specific technologies mentioned in job posting to improve keyword matching"
                },
                {
                    "type": "good",
                    "tip": "Good use of technical acronyms and frameworks that ATS can easily parse"
                }
            ]
        },
        "toneAndStyle": {
            "score": 60,
            "tips": [
                {
                    "type": "good",
                    "tip": "Professional and concise language",
                    "explanation": "The resume uses appropriate technical terminology and maintains a professional tone throughout, which is suitable for a developer role."
                },
                {
                    "type": "improve",
                    "tip": "Inconsistent formatting and presentation",
                    "explanation": "The resume has formatting issues like broken links, inconsistent date formats, and mixed presentation styles that detract from professionalism."
                },
                {
                    "type": "improve",
                    "tip": "Lacks industry-specific terminology",
                    "explanation": "Missing key terms like 'enterprise applications', 'business solutions', 'stakeholder management' that would resonate with the corporate environment described in the job posting."
                }
            ]
        },
        "content": {
            "score": 35,
            "tips": [
                {
                    "type": "improve",
                    "tip": "Major technology stack mismatch",
                    "explanation": "Resume focuses heavily on MERN stack (MongoDB, Express, React, Node.js) while the job requires ASP.NET/C# backend, Azure technologies, and different frontend build tools. This is a critical gap."
                },
                {
                    "type": "improve",
                    "tip": "Missing required experience areas",
                    "explanation": "No mention of Azure AD/SSO, OAuth2/OIDC, Infrastructure-as-Code, or enterprise-level application development which are core requirements for this position."
                },
                {
                    "type": "improve",
                    "tip": "Insufficient professional experience",
                    "explanation": "Only shows training program experience (Geekster) and very recent employment (Dec 25-Present), lacking the 2-3 years of hands-on development experience required."
                },
                {
                    "type": "good",
                    "tip": "Strong project portfolio",
                    "explanation": "Demonstrates practical application of full-stack development with quantified achievements and live project links, showing hands-on coding ability."
                }
            ]
        },
        "structure": {
            "score": 55,
            "tips": [
                {
                    "type": "good",
                    "tip": "Logical section organization",
                    "explanation": "Resume follows a clear structure with Summary, Experience, Projects, Skills, and Education sections in appropriate order for a developer role."
                },
                {
                    "type": "improve",
                    "tip": "Broken links and formatting issues",
                    "explanation": "The EatZy project link appears broken/malformed, and there are inconsistencies in date formatting and section spacing that hurt readability."
                },
                {
                    "type": "improve",
                    "tip": "Poor experience section structure",
                    "explanation": "The experience section mixes training programs with actual employment, making it unclear what constitutes real work experience versus educational programs."
                },
                {
                    "type": "improve",
                    "tip": "Skills section needs better categorization",
                    "explanation": "Skills are listed but not aligned with job requirements. Should reorganize to highlight relevant technologies first and group by frontend/backend/cloud/tools."
                }
            ]
        },
        "skills": {
            "score": 40,
            "tips": [
                {
                    "type": "improve",
                    "tip": "Critical backend technology gap",
                    "explanation": "Resume shows Node.js/Express.js experience but job requires ASP.NET/C# backend development. This is a fundamental mismatch for the role requirements."
                },
                {
                    "type": "improve",
                    "tip": "Missing cloud and DevOps skills",
                    "explanation": "No mention of Azure, Infrastructure-as-Code, or DevOps practices which are essential for this role. Current skills focus on different cloud platforms (Vercel, Render)."
                },
                {
                    "type": "improve",
                    "tip": "Lack of enterprise authentication experience",
                    "explanation": "Shows basic JWT authentication but missing Azure AD, SSO, OAuth2/OIDC experience which are specifically required for enterprise applications."
                },
                {
                    "type": "good",
                    "tip": "Strong frontend development foundation",
                    "explanation": "Solid React.js, responsive design, and state management skills provide a good foundation, though specific build tools like Vite/Webpack need to be highlighted."
                }
            ]
        }
    }
}
