import styles from "./index-sass.module.scss";

const PurpleButton = ({ title, onClick }) => (
  <button className={styles.purpleButton} onClick={onClick}>
    {title}
  </button>
);

export default PurpleButton;
