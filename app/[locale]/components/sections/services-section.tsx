"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Globe, Computer, ServerIcon } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/root/lib/utils";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const t = useTranslations("ServicesSection");

  const services = [
    { id: "web" as const, icon: <Globe className="h-8 w-8 text-primary" /> },
    { id: "desktop" as const, icon: <Computer className="h-8 w-8 text-primary" /> },
    { id: "backend" as const, icon: <ServerIcon className="h-8 w-8 text-primary" /> },
  ];

  return (
    <section id="services" ref={ref} className="py-20">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("title")}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
            {t("subtitle")}
          </p>

          {/* Download Quote Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" asChild>
              <a
                href="/docs/CW_FabianMiranda_en.pdf"
                download
                className="flex items-center"
              >
                {t("downloadQuoteEn")}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="/docs/CW_FabianMiranda_es.pdf"
                download
                className="flex items-center"
              >
                {t("downloadQuoteEs")}
              </a>
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="web" className="w-full">
          <TabsList className="flex justify-center mb-8">
            {services.map((service, i) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className={cn(
                  "transition-all duration-500",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {t(`tabs.${service.id}`)}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => {
            // Pull description and features from translations
            const serviceId = service.id as "web" | "desktop" | "backend";
            const description = t(`services.${serviceId}.description`);
            const features = t.raw(`services.${serviceId}.features`) as string[];

            return (
              <TabsContent key={service.id} value={service.id}>
                <div
                  className={cn(
                    "grid md:grid-cols-3 gap-8 transition-all duration-500",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                >
                  {/* Icon + Title + Description */}
                  <Card className="md:col-span-1 bg-card card-hover">
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle>{t(`tabs.${service.id as "web" | "desktop" | "backend"}`)}</CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </CardHeader>
                  </Card>

                  {/* Features */}
                  <Card className="md:col-span-2 bg-card card-hover">
                    <CardHeader>
                      <CardTitle>{t("included")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feat, idx) => (
                          <div
                            key={idx}
                            className={cn(
                              "flex items-center p-3 rounded-md bg-muted transition-all duration-500",
                              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                            )}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                          >
                            <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
