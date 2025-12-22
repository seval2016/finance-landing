import "./globals.scss";

export const metadata = {
  title: "Finance Landing",
  description: "Finance landing page case study"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
