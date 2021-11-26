import React from "react";
import styles from "./index.module.scss";

// interface IButtonProps {
//   text: string;
// }

const Button = ({ text }) => (
  <button type="button" className={styles.button} onClick={() => {}}>
    {text}
  </button>
);

export default Button;
