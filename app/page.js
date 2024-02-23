import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner.jsx";
import { Promo } from "./components/Promo/Promo.jsx";
import { NewCardsList } from "./components/CardsList/NewCardsList.jsx";
import { PopularCardsList } from "./components/CardsList/PopularCardsList.jsx";
export default function Home() {
  return (
    <main className="main">
      <Banner />
      <Promo />
      <NewCardsList />
      <PopularCardsList />
    </main>
  );
}
