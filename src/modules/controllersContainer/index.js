import React, { useContext, useState } from "react";
import Select from "./select";
import Button from "./button";
import AppContext from "../../context";

import styles from "./index.module.scss";

const buttonTexts = {
  start: "start",
};

const ControllersContainer = () => {
  const { appState, setAppState } = useContext(AppContext);
  const [pickedMode, setPickedMode] = useState(appState.pickedMode);

  const { modes } = appState;

  const onSetMode = ({ value }) => {
    setPickedMode(value);
  };

  const onStart = () => {
    refreshGame();

    setTimeout(() => {
      startGame();
    }, 0);
  };

  const startGame = () => {
    setAppState((prevState) => ({
      ...prevState,
      pickedMode,
    }));
  };

  const refreshGame = () => {
    setAppState((prevState) => ({
      ...prevState,
      pickedMode: null,
      hoverHistory: [],
    }));
  };

  return (
    <div className={styles.controllersContainer}>
      <Select modes={modes} onChange={onSetMode} />
      <Button onClick={onStart} text={buttonTexts.start} />
    </div>
  );
};

export default ControllersContainer;
