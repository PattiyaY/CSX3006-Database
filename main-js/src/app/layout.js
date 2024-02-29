export const metadata = {
  title: "Hotel Online Management",
  description: "DB project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
