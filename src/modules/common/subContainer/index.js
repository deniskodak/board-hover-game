import React from "react";
import styles from "./index.module.scss";

const SubContainer = ({ children }) => (
  <div className={styles.subContainer}>{children}</div>
);

export default SubContainer;
