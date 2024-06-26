import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@components/ui/navbar';
import Footer from '@components/ui/footer';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { SnackbarProvider } from '@/components/alert/alert.component';
export const metadata: Metadata = {
  title: 'Enigma Blog',
  description: 'Unveiling knowledge mysteries for contributors and developers worldwide.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-primary-dark  ">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <SnackbarProvider>
            <Navbar />

            {children}
            <Footer />
          </SnackbarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
