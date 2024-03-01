import Styles from "./CardList.module.css";
import { NewCardsFragment } from "./NewCardsFragment.jsx";
import { PopularCardsFragment } from "./PopularCardsFragment";
export const CardsList = function (props) {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
      <ul className={Styles["cards-list"]}>
        {(props.id === "new" && <NewCardsFragment />) ||
          (props.id === "popular" && <PopularCardsFragment />)}
      </ul>
    </section>
  );
};
