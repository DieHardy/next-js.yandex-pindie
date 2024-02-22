import "./globals.css";


export const metadata = {
  title: "Pindie - мир видеоигр",
  description: "Pindie - как rustore, но лучше!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header>{/*содержание хеда */}</header>
        {children}
        <footer>{/*содержание фута */}</footer>
      </body>
    </html>
  );
}
