import React from "react";
import Select from "react-select";

import styles from "./index.module.scss";

const selectLabels = {
  default: "pick mode",
  easyMode: "easy mode",
  normalMode: "normal mode",
  hardMode: "hard mode",
};

const SelectModule = ({ modes, onChange }) => {
  const modesKeys = Object.keys(modes);

  const selectOptions = modesKeys.map((key) => ({
    value: modes[key].field,
    label: selectLabels[key],
  }));

  return (
    <Select
      className={styles.select}
      options={selectOptions}
      placeholder={selectLabels.default}
      onChange={onChange}
    ></Select>
  );
};

export default SelectModule;
