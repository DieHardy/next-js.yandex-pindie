import "./globals.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
export const metadata = {
  title: "Pindie - мир видеоигр",
  description: "Pindie - как rustore, но лучше!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}