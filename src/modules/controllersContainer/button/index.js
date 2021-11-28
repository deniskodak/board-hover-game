import React from "react";
import styles from "./index.module.scss";

const Button = ({ text, onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    {text}
  </button>
);

export default Button;
