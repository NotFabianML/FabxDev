// app/[locale]/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Anton, Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Toaster } from '@/components/ui/toaster';
import { routing, Locale } from '@/root/i18n/routing';

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-anton',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'Professional software developer portfolio showcasing projects and services',
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }


  // Load the appropriate JSON messages file
  const messages = await getMessages(
    // @ts-expect-error — server helper from next-intl
    import(`@/root/messages/${locale}.json`)
  );

  return (
    <html lang={locale}>
      <body className={`${anton.variable} ${poppins.variable} font-poppins bg-background`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
