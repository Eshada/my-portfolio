"use client"

import { Logo } from "./logo"
import { Button } from "./ui/button"
import { LanguageSwitcher } from "./language-switcher"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { ClientOnly } from "./client-only"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />

        {/* Desktop Navigation */}
        <ClientOnly
          fallback={
            <nav className="hidden md:flex items-center gap-6">
              <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                About
              </button>
              <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Skills
              </button>
              <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Portfolio
              </button>
              <Button>Request Design</Button>
              <div className="w-10 h-10" />
            </nav>
          }
        >
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t("about")}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t("skills")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t("portfolio")}
            </button>
            <Button onClick={() => scrollToSection("contact")}>
              {t("requestDesign")}
            </Button>
            <LanguageSwitcher />
          </nav>
        </ClientOnly>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <ClientOnly>
          <div className="md:hidden border-t bg-background">
            <nav className="container mx-auto flex flex-col gap-4 p-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("about")}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("skills")}
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("portfolio")}
              </button>
              <Button onClick={() => scrollToSection("contact")} className="w-full">
                {t("requestDesign")}
              </Button>
              <LanguageSwitcher />
            </nav>
          </div>
        </ClientOnly>
      )}
    </header>
  )
}