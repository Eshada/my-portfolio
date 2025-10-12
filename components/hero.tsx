"use client"

import { Button } from "./ui/button"
import { ArrowRight, Code2, Palette } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium" suppressHydrationWarning>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t("availableForProjects")}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance" suppressHydrationWarning>{t("heroTitle")}</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty" suppressHydrationWarning>{t("heroDescription")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4" suppressHydrationWarning>
              <Button size="lg" onClick={() => scrollToSection("contact")} className="group">
                {t("startYourProject")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("portfolio")}>
                {t("viewMyWork")}
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-muted-foreground" suppressHydrationWarning>{t("yearsExperience")}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground" suppressHydrationWarning>{t("projectsCompleted")}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixelcut-export-0ZJumVS2hoK1KBC1Mx9rcauGDlYplB.png"
                alt="About Eshada"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
