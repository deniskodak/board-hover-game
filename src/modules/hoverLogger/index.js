import React from "react";
import styles from "./index.module.scss";

// interface IButtonProps {
//   text: string;
// }

const HoverLogger = () => (
  <div className={styles.hoverBox}>
    <h2 className={styles.title}>Hover squares</h2>
    <ul className={styles.list}>
      <li className={styles.item}>Colum 2 row 2</li>
      <li className={styles.item}>Colum 2 row 2</li>
      <li className={styles.item}>Colum 2 row 2</li>
      <li className={styles.item}>Colum 2 row 2</li>
    </ul>
  </div>
);

export default HoverLogger;
