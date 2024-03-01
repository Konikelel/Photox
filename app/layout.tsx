import './globals.css';
import type { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Poppins } from 'next/font/google';

const poppins: NextFont = Poppins({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Photox',
    description: 'Photographer portfolio website',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
