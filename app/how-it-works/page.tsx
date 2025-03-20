import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileText, PenTool, Sparkles, Download } from "lucide-react"
import FadeIn from "@/components/ui-animation/fade-in"
import StaggerChildren from "@/components/ui-animation/stagger-children"
import StaggerItem from "@/components/ui-animation/stagger-item"

export default function HowItWorksPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 px-4 mt-16">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">How It Works</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Learn how our AI-powered cover letter generator helps you create professional cover letters in minutes.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-16">The Process</h2>
          </FadeIn>

          <div className="space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <FadeIn direction="left">
                <div className="bg-muted/50 rounded-lg p-8 h-full">
                  <div className="aspect-video bg-card rounded-lg flex items-center justify-center">
                    <PenTool className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                      1
                    </div>
                    <h3 className="text-2xl font-semibold">Enter Your Details</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Start by filling out your personal information, including your name, contact details, and
                    professional background. This information will be used to personalize your cover letter.
                  </p>
                  <p className="text-muted-foreground">
                    You'll also provide details about the job you're applying for, including the job title, company
                    name, and key requirements from the job description.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
              <FadeIn direction="right" className="md:order-2">
                <div className="bg-muted/50 rounded-lg p-8 h-full">
                  <div className="aspect-video bg-card rounded-lg flex items-center justify-center">
                    <Sparkles className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="left" className="md:order-1">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                      2
                    </div>
                    <h3 className="text-2xl font-semibold">AI Generation</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our advanced AI analyzes your information and the job requirements to create a tailored cover letter
                    that highlights your relevant skills and experience.
                  </p>
                  <p className="text-muted-foreground">
                    The AI identifies key keywords from the job description and incorporates them naturally into your
                    cover letter, increasing your chances of passing through Applicant Tracking Systems (ATS).
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <FadeIn direction="left">
                <div className="bg-muted/50 rounded-lg p-8 h-full">
                  <div className="aspect-video bg-card rounded-lg flex items-center justify-center">
                    <FileText className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                      3
                    </div>
                    <h3 className="text-2xl font-semibold">Review and Edit</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Once generated, you can review your cover letter and make any necessary edits or adjustments to
                    ensure it perfectly represents you and your qualifications.
                  </p>
                  <p className="text-muted-foreground">
                    Our editor allows you to customize the tone, style, and content to match your personal preferences
                    and the specific requirements of the job.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
              <FadeIn direction="right" className="md:order-2">
                <div className="bg-muted/50 rounded-lg p-8 h-full">
                  <div className="aspect-video bg-card rounded-lg flex items-center justify-center">
                    <Download className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="left" className="md:order-1">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                      4
                    </div>
                    <h3 className="text-2xl font-semibold">Download and Apply</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Once you're satisfied with your cover letter, you can download it in various formats (PDF, DOCX) or
                    copy it directly to your clipboard.
                  </p>
                  <p className="text-muted-foreground">
                    Use your professionally crafted cover letter to apply for jobs with confidence, knowing it's
                    tailored to highlight your strengths and match the job requirements.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-16">Why This Process Works</h2>
          </FadeIn>

          <StaggerChildren>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-4">Tailored to Job Requirements</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes the job description to highlight your most relevant skills and experience,
                    increasing your chances of getting an interview.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-4">Professional Formatting</h3>
                  <p className="text-muted-foreground">
                    Your cover letter will have a clean, professional layout that makes a great first impression on
                    hiring managers.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-4">Time Efficiency</h3>
                  <p className="text-muted-foreground">
                    What would normally take hours to write is completed in minutes, allowing you to apply to more jobs
                    in less time.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Ready to Try It Yourself?</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Create your first AI-generated cover letter in minutes and see the difference it makes in your job
              applications.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Link href="/create">
              <Button size="lg" variant="secondary" className="group">
                Create Your Cover Letter Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

