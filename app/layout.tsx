import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luxury Travel & Tours - Premium Remote Travel Services',
  description: 'Experience limitless travel with our premium remote travel services. Flight bookings, visa assistance, hotel reservations, tour packages, and more. Worldwide excellence delivered.',
  keywords: 'luxury travel, travel agency, flight bookings, visa assistance, hotel bookings, tour packages, travel services',
  authors: [{ name: 'Luxury Travel & Tours' }],
  openGraph: {
    title: 'Luxury Travel & Tours - Premium Remote Travel Services',
    description: 'Experience limitless travel with our premium remote travel services.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

