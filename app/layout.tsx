import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Amit Kumar Upadhyay - Projects',
  description: 'A showcase of full-stack, frontend, and backend projects by Amit Kumar Upadhyay.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900/80 to-black/90 stars" />
        {children}
      </body>
    </html>
  );
}