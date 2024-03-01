import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner.jsx";
import { Promo } from "./components/Promo/Promo.jsx";
import { CardsList } from "./components/CardsList/CardsList.jsx";

export default function Home() {
  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярное"></CardsList>
      <CardsList id="new" title="Новое"></CardsList>
      <Promo />
    </main>
  );
}
