import React from "react";
import Row from "./row";

import styles from "./index.module.scss";

const GameTable = ({ boardSize }) => {
  const board = Array(boardSize).fill(null);

  return (
    <>
      {boardSize ? (
        <div className={styles.gameBoard}>
          {board.map((_, idx, arr) => (
            <Row key={idx} idx={idx} arr={arr} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default GameTable;
