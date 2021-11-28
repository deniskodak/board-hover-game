import React, { useRef, useEffect, useContext } from "react";
import AppContext from "../../context";

import styles from "./index.module.scss";

const HoverLogger = () => {
  const lastItemRef = useRef(null);

  const { appState } = useContext(AppContext);
  const { hoverHistory } = appState;

  const scrollToBottom = () => {
    lastItemRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [hoverHistory]);

  return (
    <div className={styles.hoverBox}>
      <h2 className={styles.title}>Hover squares</h2>
      <ul className={styles.list}>
        {hoverHistory.map(({ row, col }, idx) => (
          <li key={idx} className={styles.item}>
            row: {row} col: {col}
          </li>
        ))}
        <li ref={lastItemRef} />
      </ul>
    </div>
  );
};

export default HoverLogger;
