"use client"

import Link from "next/link"
import { BarChart3, Brain, Database, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AnimatedSection,
  AnimatedItem,
  fadeIn,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
} from "@/hooks/use-scroll-animation"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <BarChart3 className="h-6 w-6" />
            <span>DataScientist</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Data Scientist & ML Engineer
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transforming data into actionable insights and building intelligent systems that solve real-world
                    problems.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#projects">View My Projects</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative h-[450px] w-[450px] rounded-full bg-gradient-to-b from-primary/20 to-primary/0 p-4">
                  <img
                    alt="Data Scientist Portrait"
                    className="rounded-full object-cover"
                    src="https://i.ibb.co/zVhy2PFW/tugas2-2.png"
                    style={{
                      aspectRatio: "450/450",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <AnimatedSection variants={fadeInUp}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm a passionate data scientist with expertise in machine learning, statistical analysis, and data
                    visualization. With a background in [Your Background], I specialize in turning complex data into
                    clear insights and building predictive models that drive business decisions.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <AnimatedSection variants={fadeInLeft}>
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Brain className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="font-medium">Advanced Analytics</h3>
                        <p className="text-sm text-muted-foreground">
                          Expertise in statistical analysis, machine learning, and predictive modeling.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Database className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="font-medium">Data Engineering</h3>
                        <p className="text-sm text-muted-foreground">
                          Experience with data pipelines, ETL processes, and database management.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <BarChart3 className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="font-medium">Data Visualization</h3>
                        <p className="text-sm text-muted-foreground">
                          Creating compelling visual narratives from complex datasets.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection variants={fadeInRight}>
                <div className="flex justify-center">
                  <img
                    alt="Data Analysis Visualization"
                    className="rounded-lg object-cover"
                    src="/placeholder.svg?height=400&width=500"
                    style={{
                      aspectRatio: "500/400",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection variants={fadeInUp}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My technical toolkit for solving data science challenges
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection variants={staggerContainer} className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <AnimatedItem variants={scaleIn}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Brain className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Machine Learning</h3>
                      <ul className="space-y-2 text-center">
                        <li>Supervised & Unsupervised Learning</li>
                        <li>Deep Learning & Neural Networks</li>
                        <li>Natural Language Processing</li>
                        <li>Computer Vision</li>
                        <li>Time Series Analysis</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>
              <AnimatedItem variants={scaleIn} delay={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Database className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Programming & Tools</h3>
                      <ul className="space-y-2 text-center">
                        <li>Python (Pandas, NumPy, SciPy)</li>
                        <li>R (tidyverse, ggplot2)</li>
                        <li>SQL & NoSQL Databases</li>
                        <li>Spark & Big Data Tools</li>
                        <li>Git & Version Control</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>
              <AnimatedItem variants={scaleIn} delay={0.4}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <BarChart3 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Visualization & Deployment</h3>
                      <ul className="space-y-2 text-center">
                        <li>Tableau & Power BI</li>
                        <li>Matplotlib, Seaborn, Plotly</li>
                        <li>Dashboard Development</li>
                        <li>Model Deployment (Flask, FastAPI)</li>
                        <li>Cloud Platforms (AWS, GCP, Azure)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>
            </AnimatedSection>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <AnimatedSection variants={fadeInUp}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A selection of my data science and machine learning projects
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection variants={fadeIn} className="mx-auto py-12">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="ml">Machine Learning</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="visualization">Visualization</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <AnimatedSection variants={staggerContainer} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatedItem variants={fadeInUp}>
                      <ProjectCard
                        title="Predictive Customer Churn Model"
                        description="Built a machine learning model to predict customer churn with 92% accuracy, helping a SaaS company reduce churn by 15%."
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Machine Learning", "Python", "Classification"]}
                      />
                    </AnimatedItem>
                    <AnimatedItem variants={fadeInUp} delay={0.1}>
                      <ProjectCard
                        title="Sales Forecasting Dashboard"
                        description="Developed an interactive dashboard for sales forecasting using time series analysis, improving inventory management efficiency by 23%."
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Time Series", "Tableau", "Forecasting"]}
                      />
                    </AnimatedItem>
                    <AnimatedItem variants={fadeInUp} delay={0.2}>
                      <ProjectCard
                        title="NLP-Based Sentiment Analysis"
                        description="Created a sentiment analysis tool for customer reviews using NLP techniques, helping the marketing team identify product improvement areas."
                        image="/placeholder.svg?height=200&width=300"
                        tags={["NLP", "Python", "Deep Learning"]}
                      />
                    </AnimatedItem>
                    <AnimatedItem variants={fadeInUp} delay={0.3}>
                      <ProjectCard
                        title="Customer Segmentation Analysis"
                        description="Performed cluster analysis to segment customers based on purchasing behavior, enabling targeted marketing campaigns that increased conversion by 18%."
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Clustering", "R", "Marketing Analytics"]}
                      />
                    </AnimatedItem>
                    <AnimatedItem variants={fadeInUp} delay={0.4}>
                      <ProjectCard
                        title="Fraud Detection System"
                        description="Implemented an anomaly detection system for identifying fraudulent transactions, reducing false positives by 35% compared to the previous system."
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Anomaly Detection", "Python", "Financial Analytics"]}
                      />
                    </AnimatedItem>
                    <AnimatedItem variants={fadeInUp} delay={0.5}>
                      <ProjectCard
                        title="Supply Chain Optimization"
                        description="Used linear programming and simulation to optimize supply chain operations, resulting in a 12% reduction in logistics costs."
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Optimization", "Python", "Operations Research"]}
                      />
                    </AnimatedItem>
                  </AnimatedSection>
                </TabsContent>
                <TabsContent value="ml" className="mt-6">
                  <AnimatedSection variants={staggerContainer} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatedItem variants={fadeInUp}>
                      <ProjectCard
                        title="Predictive Customer Churn Model"
                        description="Built a machine learning model to predict customer churn with 92% accuracy, helping a SaaS company reduce churn by 15%."
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Machine Learning", "Python", "Classification"]}
                      />
                    </AnimatedItem>
                    <AnimatedItem variants={fadeInUp} delay={0.1}>
                      <ProjectCard
                        title="NLP-Based Sentiment Analysis"
                        description="Created a sentiment analysis tool for customer reviews using NLP techniques, helping the marketing team identify product improvement areas."
                        image="/placeholder.svg?height=200&width=300"
                        tags={["NLP", "Python", "Deep Learning"]}
                      />
                    </AnimatedItem>
                    <AnimatedItem variants={fadeInUp} delay={0.2}>
                      <ProjectCard
                        title="Fraud Detection System"
                        description="Implemented an anomaly detection system for identifying fraudulent transactions, reducing false positives by 35% compared to the previous system."
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Anomaly Detection", "Python", "Financial Analytics"]}
                      />
                    </AnimatedItem>
                  </AnimatedSection>
                </TabsContent>
                <TabsContent value="analytics" className="mt-6">
                  <AnimatedSection variants={staggerContainer} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatedItem variants={fadeInUp}>
                      <ProjectCard
                        title="Customer Segmentation Analysis"
                        description="Performed cluster analysis to segment customers based on purchasing behavior, enabling targeted marketing campaigns that increased conversion by 18%."
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Clustering", "R", "Marketing Analytics"]}
                      />
                    </AnimatedItem>
                    <AnimatedItem variants={fadeInUp} delay={0.1}>
                      <ProjectCard
                        title="Supply Chain Optimization"
                        description="Used linear programming and simulation to optimize supply chain operations, resulting in a 12% reduction in logistics costs."
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Optimization", "Python", "Operations Research"]}
                      />
                    </AnimatedItem>
                  </AnimatedSection>
                </TabsContent>
                <TabsContent value="visualization" className="mt-6">
                  <AnimatedSection variants={staggerContainer} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatedItem variants={fadeInUp}>
                      <ProjectCard
                        title="Sales Forecasting Dashboard"
                        description="Developed an interactive dashboard for sales forecasting using time series analysis, improving inventory management efficiency by 23%."
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Time Series", "Tableau", "Forecasting"]}
                      />
                    </AnimatedItem>
                  </AnimatedSection>
                </TabsContent>
              </Tabs>
            </AnimatedSection>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection variants={fadeInUp}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Interested in working together? Let's connect!
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <AnimatedSection variants={fadeInLeft}>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                        />
                      </div>
                      <Button className="w-full">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection variants={fadeInRight}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-muted-foreground">your.email@example.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Location</h3>
                          <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Linkedin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">LinkedIn</h3>
                          <a href="#" className="text-sm text-primary hover:underline">
                            linkedin.com/in/yourprofile
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Github className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">GitHub</h3>
                          <a href="#" className="text-sm text-primary hover:underline">
                            github.com/yourusername
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 Data Scientist Portfolio. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, image, tags }) {
  return (
    <Card className="overflow-hidden">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-48 object-cover"
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

