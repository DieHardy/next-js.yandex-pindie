import Styles from "./Overlay.module.css";

export const Overlay = (props) => {
  return (
    <div onClick={props.closePopup}
      className={`${Styles["overlay"]} ${Styles["overlay_is-opened"]}`}
    ></div>
  );
};
