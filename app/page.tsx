import Image from "next/image"
import Link from "next/link"
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  ArrowRight,
  FileText,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block">Developer</span>
            </Link>
          </div>
          <nav className="flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4 max-w-3xl mx-auto">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm <span className="text-primary">Shoko</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  A passionate web developer specializing in creating beautiful,
                  functional, and user-friendly websites.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="/resume.pdf" download>
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/Shok1to"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shokotakahashi911/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:shoko.takahashi.911@gmail.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Me
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  As a Front-End Developer based in Toronto, I’m passionate
                  about creating user-friendly websites that are both functional
                  and visually appealing. I’ve completed the Full Stack Web
                  Development Boot Camp at the University of Toronto, where I
                  honed my skills and stayed up-to-date with the latest trends
                  in web development. Let’s build something awesome together!
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <span className="font-bold text-primary">01</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold">Problem Solver</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          I enjoy tackling complex challenges and finding
                          efficient solutions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <span className="font-bold text-primary">02</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold">Detail Oriented</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          I pay close attention to details to ensure
                          high-quality work.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <span className="font-bold text-primary">03</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold">Continuous Learner</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          I'm always learning new technologies and improving my
                          skills.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <span className="font-bold text-primary">04</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold">Team Player</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          I collaborate effectively with teams to achieve common
                          goals.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <span className="font-bold text-primary">05</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold">User-Focused</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          I prioritize user experience in all my development
                          work.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <span className="font-bold text-primary">06</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold">Deadline Driven</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          I consistently deliver high-quality work on time.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Featured Projects
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some of the projects I've worked on. Each project
                  represents a unique challenge and solution.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle>E-commerce Platform</CardTitle>
                    <CardDescription>
                      A fully responsive online store with payment integration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/project1.png?height=225&width=400"
                        alt="E-commerce Website"
                        width={400}
                        height={225}
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>Node.js</Badge>
                      <Badge>Express.js</Badge>
                      <Badge>Sequelize</Badge>
                      <Badge>MySQL</Badge>
                      <Badge>RESTful API</Badge>
                      <Badge>Insomnia</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link
                        href="https://github.com/Shok1to/E-commerce"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link
                        href="https://drive.google.com/file/d/1EnwDWaQNkYyFAJbL0f5xA-krUPKYLbdZ/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Watch Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Employee Tracker</CardTitle>
                    <CardDescription>
                      A productivity tool for organizing tasks and projects
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/project2.png?height=225&width=400"
                        alt="Task Management App"
                        width={400}
                        height={225}
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>Node.js</Badge>
                      <Badge>Inquirer.js</Badge>
                      <Badge>MySQL</Badge>
                      <Badge>SQL</Badge>
                      <Badge>Command Line App</Badge>
                      <Badge>Insomnia</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link
                        href="https://github.com/Shok1to/Employee-Tracker"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link
                        href="https://drive.google.com/file/d/19ZzsULObB6_Xu2BvuyIwIo8zRsbLjMXR/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Watch Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Weather Forecasts</CardTitle>
                    <CardDescription>
                      Real-time weather information with interactive maps
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/project3.png?height=225&width=400"
                        alt="Weather Dashboard"
                        width={400}
                        height={225}
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>HTML5</Badge>
                      <Badge>CSS3</Badge>
                      <Badge>JavaScript</Badge>
                      <Badge>OpenWeather API</Badge>
                      <Badge>Fetch API</Badge>
                      <Badge>DOM Manipulation</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link
                        href="https://github.com/Shok1to/weather-forecasts"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link
                        href="https://shok1to.github.io/weather-forecasts/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Blog Platform</CardTitle>
                    <CardDescription>
                      A content management system for bloggers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=225&width=400"
                        alt="Blog Platform"
                        width={400}
                        height={225}
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>Node.js</Badge>
                      <Badge>Express</Badge>
                      <Badge>MongoDB</Badge>
                      <Badge>EJS</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link
                        href="https://github.com/yourusername/project4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link
                        href="https://project4.example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Skills & Technologies
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are the technologies and tools I work with to bring ideas
                  to life.
                </p>
              </div>

              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Frontend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>HTML5 & CSS3</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>JavaScript (ES6+)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>TypeScript</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>React.js</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Next.js</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Tailwind CSS</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Backend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Node.js</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Express.js</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>RESTful APIs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>MySQL</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>RESTful APIs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>GraphQL</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tools & Others</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Git & GitHub</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Vercel</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>API Testing Tools (Insomnia)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Google Forms API</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Email Notifications</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>VS Code</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get In Touch
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have a project in mind or want to discuss potential
                  opportunities? Feel free to reach out!
                </p>
              </div>
              <div className="mx-auto grid w-full max-w-lg gap-6 py-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a
                        href="mailto:shoko.takahashi.911@gmail.com"
                        className="text-sm hover:underline"
                      >
                        shoko.takahashi.911@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a
                        href="https://www.linkedin.com/in/shokotakahashi911/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                      >
                        linkedin.com/in/shokotakahashi911
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-primary" />
                      <a
                        href="https://github.com/Shok1to"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                      >
                        github.com/Shok1to
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <a
                        href="/resume.pdf"
                        download
                        className="text-sm hover:underline"
                      >
                        Download Resume (PDF)
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Shoko Developer. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/Shok1to"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/shokotakahashi911/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:shoko.takahashi.911@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
