import React from "react";
import Ceil from "../ceil";

import styles from "./index.module.scss";

const Row = ({ idx, arr }) => {
  return (
    <div className={styles.row} row={idx + 1}>
      {arr.map((_, idx) => (
        <Ceil key={idx} boardSize={arr.length} idx={idx + 1} checked="false" />
      ))}
    </div>
  );
};

export default Row;
