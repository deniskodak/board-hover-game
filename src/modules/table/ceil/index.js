import React, { useContext } from "react";
import classNames from "classnames/bind";
import AppContext from "../../../context";

import styles from "./index.module.scss";

const ceilStyle = (boardSize) =>
  classNames(
    [styles.defaultCeil],
    boardSize === 10
      ? [styles.mediumCeil]
      : boardSize === 15
      ? [styles.smallCeil]
      : null
  );

const Ceil = ({ boardSize, idx }) => {
  const { setAppState } = useContext(AppContext);

  const handleHover = ({ target }) => {
    const hovered = target.getAttribute("hovered");

    const hoverInfo = {
      row: target.parentNode.getAttribute("row"),
      col: target.getAttribute("col"),
    };

    changeHoverHistory(hoverInfo);
    changeStyles(target, hovered);
  };

  const changeStyles = (el, hovered) => {
    if (hovered === "false") {
      el.setAttribute("hovered", "true");
    } else {
      el.setAttribute("hovered", "false");
    }
  };

  const changeHoverHistory = (hoverInfo) => {
    setAppState((state) => ({
      ...state,
      hoverHistory: [...state.hoverHistory, hoverInfo],
    }));
  };

  return (
    <div
      col={idx}
      className={ceilStyle(boardSize)}
      onMouseEnter={handleHover}
      hovered="false"
    ></div>
  );
};

export default Ceil;
