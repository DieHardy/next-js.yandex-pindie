import Styles from "./Card.module.css";

export function Card() {
  console.log(Styles);
  return (
    <div>
      <img src="/images/brutal.avif" className={Styles.image} />
      <h3 className={Styles.title}>Брутальная крепость</h3>
      <p>выбор для смелых и непоколебимых личностей, вроде Аски</p>
    </div>
  );
}
