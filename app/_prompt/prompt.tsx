const { GoogleGenerativeAI } = require("@google/generative-ai");





const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// Define the expected structure for TypeScript users
interface PersonalData {
    name: string;
    email: string;
    number: string;
    location: string;
    linkedin?: string;
}

interface JobData {
    jobTitle: string;
    company: string;
    hiringManager?: string;
    department?: string;
    jobDescription: string;
}

interface SkillsData {
    skills: string;
    experience: string;
    education: string;
    university: string;
    achievements?: string;
    tone: string;
}

export async function generateCoverLetter(
    personalData: PersonalData,
    jobData: JobData,
    skillsData: SkillsData
): Promise<string> {
    if (!personalData || !jobData || !skillsData) {
        console.error("Missing required parameters for generating the cover letter.");
        return "Error: Missing data.";
    }

    const prompt = `
    You are an expert in writing professional, engaging, and tailored cover letters. 
    Based on the details provided, generate a compelling cover letter that aligns with the job role.
    
    ### Personal Information:
    - **Name:** ${personalData.name}
    - **Email:** ${personalData.email}
    - **Phone:** ${personalData.number}
    - **Location:** ${personalData.location}
    - **LinkedIn:** ${personalData.linkedin || "N/A"}
    
    ### Job Details:
    - **Job Title:** ${jobData.jobTitle}
    - **Company:** ${jobData.company}
    - **Hiring Manager:** ${jobData.hiringManager || "Not specified"}
    - **Department:** ${jobData.department || "Not specified"}
    - **Job Description:** 
      ${jobData.jobDescription}
    
    ### Skills & Experience:
    - **Key Skills:** ${skillsData.skills}
    - **Experience:** ${skillsData.experience}
    - **Education:** ${skillsData.education} (${skillsData.university})
    - **Achievements:** ${skillsData.achievements || "Not specified"}
    
    ### Cover Letter Requirements:
    - **Tone:** Write in a ${skillsData.tone} tone.
    - **Personalization:** Address the hiring manager (if provided) and mention why the candidate is a great fit for the role.
    - **Structure:** 
      1. Introduction: Express enthusiasm for the role and company.  
      2. Body: Highlight relevant experience, skills, and achievements that match the job description.  
      3. Conclusion: Reinforce interest, invite further discussion, and include a closing statement.  
    
    Ensure the cover letter is well-structured, free of errors, and professional while remaining engaging and concise.
    `;


    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error generating cover letter:", error);
        return "An error occurred while generating the cover letter.";
    }
}
