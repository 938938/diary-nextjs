import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <div className={styles.page}>
          <Nav />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
