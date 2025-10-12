"use client"

import { Card } from "./ui/card"
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  const highlights = [
    t("fullStackDev"),
    t("modernUIUX"),
    t("responsive"),
    t("performance"),
    t("seoBestPractices"),
    t("ongoingSupport"),
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt="Web development illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight"suppressHydrationWarning>{t("aboutTitle")}</h2>
              <p className="text-lg text-muted-foreground text-pretty"suppressHydrationWarning>{t("aboutDescription1")}</p>
              <p className="text-lg text-muted-foreground text-pretty"suppressHydrationWarning>{t("aboutDescription2")}</p>
            </div>

            <Card className="p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4"suppressHydrationWarning>{t("whatIOffer")}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm" suppressHydrationWarning >{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
