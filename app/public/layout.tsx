import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'eATOM - Portal Awam',
  description: 'Sistem Aplikasi Jabatan Tenaga Atom Malaysia - Portal Awam',
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}