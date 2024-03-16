'use client';
import Styles from "./Promo.module.css";
import {useState, useEffect} from 'react';
export const Promo = () => {
  let [codeIsVisible, SetVisibleCode] = useState(false);
  const buttonText = 'Получить код';
  const [time, setTime] = useState(new Date());

    const handleButtonClick = () =>{
      {
        !codeIsVisible ? SetVisibleCode(true) : SetVisibleCode(false);
      }
    }


    useEffect(()=>{
      const timeout = setTimeout(() => {
        setTime(new Date());
      }, 5000);
      return () => {
        SetVisibleCode(false);
        clearTimeout(timeout);
      };
    },[time]);

  return (
    <section className={Styles.promo}>
      <div className={Styles["promo__description-block"]}>
        <h2 className={Styles["promo__title"]}>Твой промо-код</h2>
        <p className={Styles["promo__description"]}>
          Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
        </p>
        <button className={`button ${Styles.promo__button}`} onClick={handleButtonClick}>
           {!codeIsVisible ? buttonText : <><span className={Styles["promo-code"]}>WEBTEENS10</span></>}
        </button>
      </div>
      <img
        src="/images/promo-illustration.svg"
        alt="Собака"
        className={Styles["promo__image"]}
      />
    </section>
  );
};
