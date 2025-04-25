"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Shield, Zap, Cpu, Code2 } from "lucide-react";
import { cn } from "@/root/lib/utils";
import image from "@/assets/pc.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutSection() {
  const t = useTranslations("AboutSection");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "TypeScript", level: 95 },
    { name: "CSS/TailwindCSS", level: 85 },
    { name: "React", level: 92 },
    { name: "Next.js", level: 92 },
    { name: "Node.js", level: 87 },
    { name: "SQL", level: 80 },
    { name: "NoSQL", level: 76 }
  ];

  const stats = [
    { value: "2+", label: t("stats.yearsExperience"), icon: <Shield className="h-10 w-10 text-primary" /> },
    { value: "10+", label: t("stats.projectsCompleted"), icon: <Code2 className="h-10 w-10 text-primary" /> },
    { value: "10+", label: t("stats.happyClients"), icon: <Zap className="h-10 w-10 text-primary" /> },
    { value: "7+", label: t("stats.techStacks"), icon: <Cpu className="h-10 w-10 text-primary" /> }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-card">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("title")}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div
            className={cn(
              "space-y-6 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h3 className="text-2xl">
              {t("heading")}
            </h3>

            <p className="text-muted-foreground">
              {t("subtitle1")}
            </p>
            <p className="text-muted-foreground">
              {t("subtitle2")}
            </p>

            <div className="pt-4">
              <h4 className="text-xl mb-4">
                {t("keySkillsTitle")}
              </h4>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-1000 ease-out"
                        style={{
                          width: isInView ? `${skill.level}%` : "0%",
                          transition: "width 1s ease-out"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image & stats */}
          <div
            className={cn(
              "space-y-10 transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src={image.src}
                alt={t("overlayText")}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">
                  {t("overlayText")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={cn(
                    "bg-muted p-6 rounded-lg text-center transition-all duration-700",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    { "delay-300": i % 2 === 1, "delay-500": i >= 2 }
                  )}
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
