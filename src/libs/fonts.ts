import { Montserrat_Alternates, Lato } from 'next/font/google';

export const titles = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const body = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
