"use client"

import { Card } from "./ui/card"
import { Code2, Palette, Database, Zap, Globe, Smartphone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Skills() {
  const { t } = useLanguage()

  const skills = [
    {
      icon: Code2,
      title: t("frontendDev"),
      description: t("frontendDesc"),
      color: "text-blue-500",
    },
    {
      icon: Database,
      title: t("backendDev"),
      description: t("backendDesc"),
      color: "text-green-500",
    },
    {
      icon: Palette,
      title: t("uiuxDesign"),
      description: t("uiuxDesc"),
      color: "text-purple-500",
    },
    {
      icon: Zap,
      title: t("performanceSkill"),
      description: t("performanceDesc"),
      color: "text-yellow-500",
    },
    {
      icon: Globe,
      title: t("webTech"),
      description: t("webTechDesc"),
      color: "text-cyan-500",
    },
    {
      icon: Smartphone,
      title: t("responsiveDesign"),
      description: t("responsiveDesc"),
      color: "text-pink-500",
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight"suppressHydrationWarning>{t("skillsTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty" suppressHydrationWarning >{t("skillsDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg bg-muted w-fit ${skill.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 suppressHydrationWarning className="text-xl font-semibold mb-2">{skill.title}</h3>
                    <p suppressHydrationWarning className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
