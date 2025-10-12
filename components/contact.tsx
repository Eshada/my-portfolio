"use client"

import type React from "react"

import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Mail, MessageSquare, Send } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    description: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          description: "",
          timeline: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight"suppressHydrationWarning>{t("contactTitle")}</h2>
            <p className="text-lg text-muted-foreground text-pretty"suppressHydrationWarning>{t("contactDescription")}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1"suppressHydrationWarning>{t("emailMe")}</h3>
                    <p className="text-sm text-muted-foreground">essada.dev@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1"suppressHydrationWarning>{t("quickResponse")}</h3>
                    <p className="text-sm text-muted-foreground"suppressHydrationWarning>{t("quickResponseDesc")}</p>
                  </div>
                </div>
              </Card>

              <div className="p-6 bg-primary/5 rounded-lg">
                <h3 className="font-semibold mb-2"suppressHydrationWarning>{t("whatToInclude")}</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li suppressHydrationWarning>• {t("projectDescription")}</li>
                  <li suppressHydrationWarning>• {t("timelineExpectations")}</li>
                  <li suppressHydrationWarning>• {t("budgetRange")}</li>
                  <li suppressHydrationWarning>• {t("specificRequirements")}</li>
                </ul>
              </div>
            </div>

            <Card className="lg:col-span-2 p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" suppressHydrationWarning >{t("name")} *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      suppressHydrationWarning
                      placeholder={t("yourName")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label suppressHydrationWarning htmlFor="email">{t("email")} *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      suppressHydrationWarning
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t("yourEmail")}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectType" suppressHydrationWarning>{t("projectType")}</Label>
                    <Input
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      suppressHydrationWarning
                      placeholder={t("projectTypePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" suppressHydrationWarning>{t("budget")}</Label>
                    <Input
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      suppressHydrationWarning
                      placeholder={t("budgetPlaceholder")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline" suppressHydrationWarning>{t("timeline")}</Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    suppressHydrationWarning
                    placeholder={t("timelinePlaceholder")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" suppressHydrationWarning>{t("description")} *</Label>
                  <Textarea
                    id="description"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    suppressHydrationWarning
                    placeholder={t("descriptionPlaceholder")}
                    rows={5}
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-primary/10 text-primary rounded-lg text-sm" suppressHydrationWarning>{t("successMessage")}</div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-destructive/10 text-destructive rounded-lg text-sm" suppressHydrationWarning>{t("errorMessage")}</div>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting} suppressHydrationWarning>
                  {isSubmitting ? (
                    t("sending")
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {t("sendRequest")}
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
