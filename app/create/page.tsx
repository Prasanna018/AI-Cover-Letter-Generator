"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { generateCoverLetter } from "../_prompt/prompt";

type Personal = {
  name: string;
  email: string;
  number: string;
  location: string;
  linkedin: string;
};

type JobDetails = {
  jobTitle: string;
  company: string;
  jobDescription: string;
};

type SkillsExperience = {
  skills: string;
  experience: string;
  education: string;
  university: string;
  achievements: string;
  tone: string;
};

export default function CreateCoverLetter() {
  const [personalFormData, setPersonalFormData] = useState<Personal>({
    name: "",
    email: "",
    number: "",
    location: "",
    linkedin: "",
  });

  const [jobFormData, setJobFormData] = useState<JobDetails>({
    jobTitle: "",
    company: "",
    jobDescription: "",
  });

  const [skillsFormData, setSkillsFormData] = useState<SkillsExperience>({
    skills: "",
    experience: "",
    education: "",
    university: "",
    achievements: "",
    tone: "professional",
  });

  const [activeTab, setActiveTab] = useState("personal");
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<any>>) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setter((prev: any) => ({ ...prev, [id]: value }));
      };

  const handleGenerateCoverLetter = async () => {
    setLoading(true);
    try {
      const coverLetter = await generateCoverLetter(personalFormData, jobFormData, skillsFormData);
      setGeneratedCoverLetter(coverLetter);
      setActiveTab("preview");
    } catch (error) {
      console.error("Error generating cover letter:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-6">Create Your Cover Letter</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="job">Job Details</TabsTrigger>
          <TabsTrigger value="skills">Skills & Experience</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input id="name" value={personalFormData.name} onChange={handleInputChange(setPersonalFormData)} placeholder="Full Name" />
              <Input id="email" value={personalFormData.email} onChange={handleInputChange(setPersonalFormData)} type="email" placeholder="Email" />
              <Input id="number" value={personalFormData.number} onChange={handleInputChange(setPersonalFormData)} placeholder="Phone Number" />
              <Input id="location" value={personalFormData.location} onChange={handleInputChange(setPersonalFormData)} placeholder="Location" />
              <Input id="linkedin" value={personalFormData.linkedin} onChange={handleInputChange(setPersonalFormData)} placeholder="LinkedIn Profile" />
            </CardContent>
            <CardFooter>
              <Button onClick={() => setActiveTab("job")} className="ml-auto">
                Next: Job Details
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="job">
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input id="jobTitle" value={jobFormData.jobTitle} onChange={handleInputChange(setJobFormData)} placeholder="Job Title" />
              <Input id="company" value={jobFormData.company} onChange={handleInputChange(setJobFormData)} placeholder="Company Name" />
              <Textarea id="jobDescription" value={jobFormData.jobDescription} onChange={handleInputChange(setJobFormData)} placeholder="Job Description" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("personal")}>
                Back
              </Button>
              <Button onClick={() => setActiveTab("skills")}>Next: Skills & Experience</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input id="skills" value={skillsFormData.skills} onChange={handleInputChange(setSkillsFormData)} placeholder="Key Skills" />
              <Textarea id="experience" value={skillsFormData.experience} onChange={handleInputChange(setSkillsFormData)} placeholder="Relevant Experience" />
              <Input id="education" value={skillsFormData.education} onChange={handleInputChange(setSkillsFormData)} placeholder="Education" />
              <Input id="university" value={skillsFormData.university} onChange={handleInputChange(setSkillsFormData)} placeholder="University" />
              <Textarea id="achievements" value={skillsFormData.achievements} onChange={handleInputChange(setSkillsFormData)} placeholder="Achievements" />
              <Select defaultValue={skillsFormData.tone} onValueChange={(val) => setSkillsFormData((prev) => ({ ...prev, tone: val }))}>
                <SelectTrigger id="tone">
                  <SelectValue placeholder="Select a tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                  <SelectItem value="confident">Confident</SelectItem>
                  <SelectItem value="creative">Creative</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("job")}>
                Back
              </Button>
              <Button onClick={handleGenerateCoverLetter} disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : "Generate Cover Letter"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle>Your Cover Letter</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap">{generatedCoverLetter || "Your cover letter will appear here..."}</pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
