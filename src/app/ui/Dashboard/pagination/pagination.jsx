import styles from "./pagination.module.css";
import React from "react";

function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        Previous
      </button>
      <button className={styles.button}>Next</button>
    </div>
  );
}

export default Pagination;
