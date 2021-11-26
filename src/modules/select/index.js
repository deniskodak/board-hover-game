import React from "react";
import Select from "react-select";

import styles from "./index.module.scss";

const apiOptions = {
  easyMode: {
    field: 5,
  },
  normalMode: {
    field: 10,
  },
  hardMode: {
    field: 15,
  },
};

const selectLables = {
  default: "pick mode",
  easyMode: "easy mode",
  normalMode: "normal mode",
  hardMode: "hard mode",
};

const SelectModule = () => {
  const modeKeys = Object.keys(apiOptions);
  const selectOptions = modeKeys.map((key) => ({
    value: apiOptions[key].field,
    label: selectLables[key],
  }));

  return <Select options={selectOptions}></Select>;
};

export default SelectModule;