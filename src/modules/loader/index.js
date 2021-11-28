import React from "react";
import Loader from "react-loader-spinner";

import styles from "./index.module.scss";

const CustomLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Loader
        type="Grid"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={1000}
      />
    </div>
  );
};

export default CustomLoader;
