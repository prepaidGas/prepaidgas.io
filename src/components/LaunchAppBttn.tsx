import styles from "./LaunchAppBttn.module.css";

export default function LaunchAppBttn() {
  return (
    <button className={`${styles.btn} font-raleway`}>
      <p>Launch app</p>
    </button>
  );
}
