"use client"

import { Button } from "./ui/button"
import { Languages } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2">
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">{language === "en" ? "العربية" : "English"}</span>
    </Button>
  )
}
