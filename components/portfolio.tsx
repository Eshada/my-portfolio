"use client"

import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Portfolio() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "Telawah",
      description:
        "A recitation tracking platform designed specifically to facilitate the tasks of teachers and administrators in monitoring student performance.",
      image: "/Telawah.png",
      tags: ["Next.js", "Supabase", "Education"],
      liveUrl: "https://telawah.vercel.app",
      githubUrl: "https://github.com/Thfid/Telawah",
    },
    {
      title: "Task Manager",
      description:
        "A modern task management web application built with Next.js and Supabase. It allows users to add, edit, and delete tasks, categorize them with labels, set due dates, and track their progress in an intuitive and responsive interface.",
      image: "/modern-task-management-app-interface.png",
      tags: ["Next.js", "Supabase", "TypeScript"],
      liveUrl: "https://taskmanger-seven.vercel.app/",
      githubUrl: "https://github.com/Eshada/Task-Manger",
    },
    {
      title: "Eshads World",
      description: "A page developed using old Vanilla JavaScript to employ the skills learned.",
      image: "/vanilla-javascript-website.png",
      tags: ["JavaScript", "HTML", "CSS"],
      liveUrl: "https://eshada.github.io/Website-1---Vanilla-JS/",
      githubUrl: "https://github.com/Thfid/Telawah",
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight"suppressHydrationWarning>{t("portfolioTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty"suppressHydrationWarning>{t("portfolioDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"suppressHydrationWarning>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("viewLive")}
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
