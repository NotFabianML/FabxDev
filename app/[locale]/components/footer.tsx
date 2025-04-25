"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-primary">
              <span className="text-2xl font-anton tracking-wider">
                {t("brand")}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {t("navigation")}
            </h3>
            <ul className="space-y-2">
              {["home", "about", "services", "projects", "contact"].map((key) => (
              <li key={key}>
                <Link
                href={`#${key}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                {t(key as "home" | "about" | "services" | "projects" | "contact")}
                </Link>
              </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {t("social")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/NotFabianML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  {t("github")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/fabian-miranda-loaiza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  {t("linkedin")}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:fabianmloaiza@gmail.com`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t("email")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {t("legal")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground text-sm">
          {t("copyright", { year })}
        </div>
      </div>
    </footer>
  );
}
