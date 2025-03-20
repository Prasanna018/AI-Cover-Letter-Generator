import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import FadeIn from "@/components/ui-animation/fade-in"
import StaggerChildren from "@/components/ui-animation/stagger-children"
import StaggerItem from "@/components/ui-animation/stagger-item"

export default function PricingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 px-4 mt-16">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Simple, Transparent Pricing</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Choose the plan that works best for your job search needs. No hidden fees.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <StaggerChildren>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle>Free</CardTitle>
                    <CardDescription>For casual job seekers</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$0</span>
                      <span className="text-muted-foreground ml-2">/ month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>3 cover letters per month</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Basic templates</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>PDF downloads</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Basic AI generation</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/create" className="w-full">
                      <Button variant="outline" className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="border-2 border-primary relative md:scale-105 shadow-lg">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Pro</CardTitle>
                    <CardDescription>For active job seekers</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$9.99</span>
                      <span className="text-muted-foreground ml-2">/ month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Unlimited cover letters</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Premium templates</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>PDF & DOCX downloads</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Advanced AI customization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Save & edit cover letters</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>ATS optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/create" className="w-full">
                      <Button className="w-full">Choose Pro</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>For teams & organizations</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$49.99</span>
                      <span className="text-muted-foreground ml-2">/ month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Everything in Pro plan</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Team management</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Custom branding</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>API access</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Analytics dashboard</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button variant="outline" className="w-full">
                        Contact Sales
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </StaggerItem>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. Your access will continue until the end of your
                  billing period.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-2">How many cover letters can I create?</h3>
                <p className="text-muted-foreground">
                  Free users can create up to 3 cover letters per month. Pro and Enterprise users have unlimited access.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
                <p className="text-muted-foreground">
                  Yes, we take data security seriously. Your information is encrypted and never shared with third
                  parties.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-muted-foreground">
                  We offer a 14-day money-back guarantee if you're not satisfied with our service.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Ready to Create Professional Cover Letters?</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start with our free plan today and upgrade anytime as your needs grow.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Link href="/create">
              <Button size="lg" variant="secondary" className="group">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

