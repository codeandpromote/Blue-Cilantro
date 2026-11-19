import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Blue Cilantro — Fine Dining on Seven Mile Beach, Grand Cayman',
  description:
    'Minimalist luxury restaurant showcase and curated menu for Blue Cilantro, Chef Vidyadhara Shetty’s French, Mediterranean, and Asian fusion dining room at Fidelity Financial Centre, Grand Cayman.',
  openGraph: {
    title: 'Blue Cilantro — Fine Dining on Seven Mile Beach, Grand Cayman',
    description:
      'Chef Vidyadhara Shetty’s acclaimed East-meets-West fine dining room and Blue Perspex Bar in Grand Cayman. Lunch, Dinner, Tasting Menus & Sunday Brunch.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Cilantro — Grand Cayman',
    description:
      'French, Mediterranean, and Asian fusion cuisine at Fidelity Financial Centre, Seven Mile Beach, Grand Cayman.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-[#FAF9F7] text-[#14181E] font-sans selection:bg-[#1E3A8A]/15 selection:text-[#14181E]" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#11161C] focus:text-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

