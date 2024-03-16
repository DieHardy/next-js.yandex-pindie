import Styles from "./Footer.module.css";
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Link href="/" className={Styles["footer__logo"]}>
        <span className={Styles["footer__logo-name"]}>pindie</span>
        <span className={Styles["footer__logo-copy"]}>, XXI век</span>
      </Link>
      <ul className={Styles["social-list"]}>
        <li className={Styles["social-list__item"]}>
          {/* нет, я конечно опишу через link, но было сказано, что для внешних ссылок нету смысла) */}
          <Link href="https://www.youtube.com/" target="_blank" className={`button ${Styles["social-list__link"]}`}>
            YT
          </Link>
        </li>
        <li className={Styles["social-list__item"]}>
          <Link href="https://vk.com/" target="_blank" className={`button ${Styles["social-list__link"]}`}>
            ВК
          </Link>
        </li>
        <li className={Styles["social-list__item"]}>
          <Link href="https://web.telegram.org/" target="_blank" className={`button ${Styles["social-list__link"]}`}>
            TG
          </Link>
        </li>
      </ul>
    </footer>
  );
};
