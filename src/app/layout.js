import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Created By Rohit Deshmukh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
