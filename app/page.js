

import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner.jsx";
import { Promo } from "./components/Promo/Promo.jsx";
import { CardsList } from "./components/CardsList/CardsList.jsx";
import {getGamesByCategory} from "./data/data-utils.js";
export default function Home() {
  const popularGames = getGamesByCategory('popular');
  const newGames = getGamesByCategory('new');

  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярное" data={popularGames}></CardsList>
      <CardsList id="new" title="Новое" data={newGames}></CardsList>
      <Promo />
    </main>
  );
}
