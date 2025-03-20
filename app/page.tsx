import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Sparkles, Clock } from "lucide-react"
import FadeIn from "@/components/ui-animation/fade-in"
import StaggerChildren from "@/components/ui-animation/stagger-children"
import StaggerItem from "@/components/ui-animation/stagger-item"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Create Perfect Cover Letters with AI</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Generate professional, tailored cover letters in seconds with our AI-powered tool. Stand out from the
                crowd and land your dream job.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link href="/create">
                <Button size="lg" className="mt-4 group">
                  Create Cover Letter
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" id="features">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Cover Letter Generator</h2>
          </FadeIn>

          <StaggerChildren>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow duration-300">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                  <p className="text-muted-foreground">
                    Our advanced AI analyzes job descriptions to create perfectly tailored cover letters.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow duration-300">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                  <p className="text-muted-foreground">Generate professional cover letters in seconds, not hours.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow duration-300">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                  <p className="text-muted-foreground">
                    Edit and refine your cover letter to match your personal style.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerChildren>

          <FadeIn delay={0.6}>
            <div className="text-center mt-12">
              <Link href="/features">
                <Button variant="outline" size="lg" className="group">
                  Explore All Features
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-muted/50" id="how-it-works">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          </FadeIn>

          <StaggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Enter Your Details</h3>
                  <p className="text-muted-foreground">
                    Fill in your personal information, job details, and qualifications.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Generation</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes your input and creates a tailored cover letter.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Download & Apply</h3>
                  <p className="text-muted-foreground">
                    Edit if needed, download your cover letter, and apply with confidence.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerChildren>

          <FadeIn delay={0.6}>
            <div className="text-center mt-12">
              <Link href="/how-it-works">
                <Button variant="outline" size="lg" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Perfect Cover Letter?</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of job seekers who have successfully landed interviews with our AI-generated cover letters.
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

