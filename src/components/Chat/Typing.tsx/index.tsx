import React from "react";
import styles from "./typing.module.css";

const Typing = () => {
  return (
    <div className={`${styles.loading_bubble}`}>
      <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce1}></div>
      </div>
    </div>
  );
};

export default Typing;
