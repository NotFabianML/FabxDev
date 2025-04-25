"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

// 1. Esquema de validación
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});
type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const t = useTranslations("ContactSection");
  const availableList = t.raw("availableFor") as string[];
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 2. Variables de entorno
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const REPLY_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
  const OWNER_EMAIL = process.env.NEXT_PUBLIC_OWNER_EMAIL!;

  // 3. Inicializar EmailJS
  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    } else {
      console.error("Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
    }
  }, [PUBLIC_KEY]);

  // 4. HookForm setup
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  // 5. Envío de formulario
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      // Envío al propietario
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: OWNER_EMAIL,
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        { publicKey: PUBLIC_KEY }
      );

      // Autoreply al usuario
      await emailjs.send(
        SERVICE_ID,
        REPLY_ID,
        {
          to_name: data.name,
          to_email: data.email,
          reply_subject: `Re: ${data.subject}`,
          reply_message: t("successDescription"),
        },
        { publicKey: PUBLIC_KEY }
      );

      toast({
        title: t("toastSuccessTitle"),
        description: t("toastSuccessDescription"),
      });

      setIsSubmitted(true);
      form.reset();
    } catch (error: any) {
      console.error("EmailJS error:", error);
      toast({
        title: t("toastErrorTitle"),
        description: t("toastErrorDescription"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // 6. Datos de contacto izquierdo
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: t("emailLabel"),
      details: OWNER_EMAIL,
      link: `mailto:${OWNER_EMAIL}`
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: t("phoneLabel"),
      details: "+506 88888888",
      link: "tel:+50688888888"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: t("locationLabel"),
      details: "San Jose, CR",
      link: "https://maps.google.com/?q=San+Jose,+CR"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("getInTouchTitle")}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {t("getInTouchSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Columna izquierda: contacto y disponibilidad */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">
                {t("contactInfoTitle")}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target={item.title === t("locationLabel") ? "_blank" : undefined}
                    rel={item.title === t("locationLabel") ? "noopener noreferrer" : undefined}
                    className="flex items-start space-x-4 p-3 rounded-md hover:bg-background transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {item.details}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                {t("availableForTitle")}
              </h3>
              <ul className="space-y-2">
                {availableList.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-muted rounded-lg p-8 text-center">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  {t("successTitle")}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t("successDescription")}
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  {t("sendAnother")}
                </Button>
              </div>
            ) : (
              <div className="bg-muted rounded-lg p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">
                  {t("formTitle")}
                </h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("nameLabel")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("nameLabel")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("emailLabel")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("emailLabel")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("subjectLabel")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("subjectLabel")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("messageLabel")}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("messageLabel")}
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button
                      type="submit"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? t("sending")
                        : (<><Send className="mr-2 h-4 w-4" /> {t("submit")}</>)
                      }
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
