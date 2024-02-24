import "./globals.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
export const metadata = {
  title: "Pindie - мир видеоигр",
  description: "Pindie - как rustore, но лучше!",
};
import Home from "./page.js";
export default function RootLayout() {
  return (
    <html lang="ru">
      <body>
        <Header />
        <Home />
        <Footer />
      </body>
    </html>
  );
}
